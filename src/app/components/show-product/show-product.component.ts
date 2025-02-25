import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-product',
  imports: [NgIf, NgFor],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent {
  
  @Input()
  selectedProduct : Product = {
    id: 0,
    name:"",
    price: 0,
    inStock: false,
    onSale: false,
    clicked: false,
    img: ""
  }

}
