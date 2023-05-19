import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products:Iproduct[] = []

  ngOnInit(): void {
    this.productService.get_All_Products().subscribe(data => {
      console.log(data)
    })
  }

}
