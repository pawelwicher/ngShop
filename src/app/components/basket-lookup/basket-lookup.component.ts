import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/basket.service';

@Component({
  selector: 'app-basket-lookup',
  templateUrl: './basket-lookup.component.html',
  styleUrls: ['./basket-lookup.component.scss']
})
export class BasketLookupComponent implements OnInit {

  public count = 0;
  public total = 0;

  constructor(
    private basketService: BasketService) { }

  public ngOnInit(): void {
    this.basketService.basket$.subscribe(basket => {
      this.count = basket.count;
      this.total = basket.total;
    });
  }

}
