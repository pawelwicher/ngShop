import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(
    private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products => this.products = products
    );
  }

}
