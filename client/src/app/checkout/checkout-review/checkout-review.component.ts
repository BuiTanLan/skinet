import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper!: CdkStepper;
  basket$!: Observable<IBasket | null>;

  constructor(private readonly basketService: BasketService, private readonly toastr: ToastrService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe({
      next: () => {
        this.toastr.success('Payment intent created');
        this.appStepper.next();
      },
      error: err => {
        console.log(err);
        this.toastr.error(err.message);
      }
    });
  }

}
