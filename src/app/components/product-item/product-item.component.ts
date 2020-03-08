import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { BasketService } from 'src/app/shared/basket.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() borderColor = 'gray';

  public disabled = false;

  constructor(
    private basketService: BasketService) { }

  public ngOnInit(): void {
    this.disabled = this.basketService.isProductInTheBasket(this.product);
  }

  public addToBasket(): void {
    this.basketService.addToBasket(this.product);
    this.disabled = this.basketService.isProductInTheBasket(this.product);
  }

}
