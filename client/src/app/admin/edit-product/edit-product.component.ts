import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IBrand } from 'src/app/shared/models/brand';
import { IProduct, ProductFormValues } from 'src/app/shared/models/product';
import { IType } from 'src/app/shared/models/type';
import { ShopService } from 'src/app/shop/shop.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product = {} as IProduct;

  productFormValues: ProductFormValues;
  brands = [] as IBrand[];
  types = [] as IType[];

  constructor(private readonly adminService: AdminService,
    private readonly shopService: ShopService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) {
    this.productFormValues = new ProductFormValues();
  }

  ngOnInit(): void {
    const brands = this.getBrands();
    const types = this.getTypes();

    forkJoin([types, brands]).subscribe({
      next: results => {
        this.types = results[0];
        this.brands = results[1];
      },
      error: error => console.log(error),
      complete: () => {
      if (this.route.snapshot.url[0].path === 'edit') {
        this.loadProduct();
      }
    }
  });
  }
  updatePrice(event: any) {
    this.product.price = event;
  }

  loadProduct() {
    this.shopService.getProduct(Number(this.route.snapshot.paramMap.get('id'))).subscribe((response: IProduct) => {
      const productBrandId = this.brands.find(x => x.name === response.productBrand)?.id;
      const productTypeId = this.types.find(x => x.name === response.productType)?.id;
      this.product = response;
      if( productBrandId && productTypeId){
        this.productFormValues = { ...response, productBrandId, productTypeId };
      }
    });
  }

  getBrands() {
    return this.shopService.getBrand();
  }

  getTypes() {
    return this.shopService.getType();
  }

  onSubmit(product: ProductFormValues) {
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedProduct = { ...this.product, ...product, price: +product.price };
      this.adminService.updateProduct(updatedProduct, Number(this.route.snapshot.paramMap.get('id'))).subscribe(() => {
        void this.router.navigate(['/admin']);
      });
    } else {
      const newProduct = { ...product, price: +product.price };
      this.adminService.createProduct(newProduct).subscribe(() => {
        void this.router.navigate(['/admin']);
      });
    }
  }

}
