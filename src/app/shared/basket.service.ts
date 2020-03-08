import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket } from './models/basket';
import { Product } from './models/product';

@Injectable({ providedIn: 'root' })
export class BasketService {

  public basket$: BehaviorSubject<Basket>;
  private basket: Basket;

  constructor() {
    this.initBasket();
    this.basket$ = new BehaviorSubject(this.basket);
  }

  public addToBasket(product: Product) {
    this.basket.basketItems.push({id: product.id, name: product.name, price: product.price});
    this.basket.count++;
    this.basket.total += product.price;
    this.basket$.next(this.basket);
  }

  public clearBasket() {
    this.initBasket();
    this.basket$.next(this.basket);
  }

  public isProductInTheBasket(product: Product): boolean {
    return this.basket.basketItems.filter(x => x.id === product.id).length > 0;
  }

  private initBasket() {
    this.basket = {
      count: 0,
      total: 0,
      basketItems: []
    };
  }
}
