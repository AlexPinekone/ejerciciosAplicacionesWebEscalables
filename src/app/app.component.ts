import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { Product } from './interfaces/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListProductsComponent, ShowProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products List';
  
  }

