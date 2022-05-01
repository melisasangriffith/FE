import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        "id": 1,
        "name": "Coca",
        "acquisitionPrice": 0.5,
        "salePrice": 2,
        "type": "drink"
      },
      {
        "id": 2,
        "name": "Kit-Kat",
        "acquisitionPrice": 0.4,
        "salePrice": 1.55,
        "type": "snack"
      }
    ]
  }

}
