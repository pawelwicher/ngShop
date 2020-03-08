import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public product: Product;

  constructor(
    private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products => this.product = this.productService.getRandomProduct(products)
    );
  }

}
