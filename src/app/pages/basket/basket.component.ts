import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/basket.service';
import { BasketItem } from 'src/app/shared/models/basketItem';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public count = 0;
  public total = 0;
  public basketItems: BasketItem[];

  constructor(
    private basketService: BasketService) { }

  public ngOnInit(): void {
    this.basketService.basket$.subscribe(basket => {
      this.count = basket.count;
      this.total = basket.total;
      this.basketItems = basket.basketItems;
    });
  }

  public clearBasket() {
    this.basketService.clearBasket();
  }

}
