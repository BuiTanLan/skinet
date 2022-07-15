import { Component, Input } from '@angular/core';
import { ProductFormValues } from '../../shared/models/product';
import { IBrand } from '../../shared/models/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IType } from 'src/app/shared/models/type';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent {
  @Input() product = new ProductFormValues();
  @Input() brands: IBrand[] = [];
  @Input() types: IType[] = [];
  min = 1;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adminService: AdminService,
    private readonly router: Router
  ) {}
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

  updatePrice(event: any) {
    this.product.price = event;
  }
}
