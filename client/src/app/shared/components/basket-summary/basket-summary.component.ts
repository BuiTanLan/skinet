import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBasketItem } from '../../models/basket';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket-summary',
  template: `
    <ng-container *ngIf="items.length > 0">
      <div class="table-responsive">
        <table class="table table-borderless">
          <thead [class.thead-light]="isBasket || isOrder" class="border-0 py-2">
            <tr>
              <th scope="col">
                <div class="p-2 px-3 text-uppercase">Product</div>
              </th>
              <th scope="col">
                <div class="py-2 text-uppercase">Price</div>
              </th>
              <th scope="col">
                <div class="py-2 text-uppercase">Quantity</div>
              </th>
              <th scope="col">
                <div class="py-2 text-uppercase">Total</div>
              </th>
              <th *ngIf="isBasket" scope="col">
                <div class="py-2 text-uppercase">Remove</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of items">
              <th scope="row">
                <div class="p-0 d-flex">
                  <img
                    src="{{ item.pictureUrl }}"
                    alt="{{ item.productName }}"
                    class="img-fluid"
                    style="max-height: 50px"
                  />
                  <div class="ms-3 d-inline-block align-middle">
                    <h5 class="mb-0">
                      <a routerLink="/shop/{{ item.id }}" class="text-dark"> {{ item.productName }}</a>
                    </h5>
                    <span *ngIf="item.type" class="text-muted font-weight-normal font-italic d-block">
                      Type: {{ item.type }}
                    </span>
                  </div>
                </div>
              </th>
              <td class="align-middle">
                <strong>
                  {{ item.price | currency }}
                </strong>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center" [class.justify-content-center]="!isBasket">
                  <i
                    *ngIf="isBasket"
                    (click)="decrementItemQuantity(item)"
                    class="fas fa-minus-circle text-warning ms-2"
                    style="cursor: pointer; font-size: 2em"
                  ></i>
                  <span class="font-weight-bold" style="font-size: 1.5em">{{ item.quantity }}</span>
                  <i
                    *ngIf="isBasket"
                    (click)="incrementItemQuantity(item)"
                    class="fas fa-plus-circle text-warning mx-2"
                    style="cursor: pointer; font-size: 2em"
                  ></i>
                </div>
              </td>
              <td class="align-middle">
                <strong>{{ item.price * item.quantity | currency }}</strong>
              </td>
              <td class="align-middle text-center">
                <a class="text-danger">
                  <i
                    *ngIf="isBasket"
                    (click)="removeBasketItem(item)"
                    class="fas fa-trash"
                    style="font-size: 1.5em; cursor: pointer"
                  ></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ng-container>
  `,
  imports: [NgIf, NgForOf, CurrencyPipe, RouterLink],
  standalone: true
})
export class BasketSummaryComponent {
  @Input() isBasket = true;
  @Input() isOrder = false;
  @Input() items: any;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  constructor() {}
  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }
}
