import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { ShowProductComponent } from '../show-product/show-product.component';

@Component({
  selector: 'app-list-products',
  imports: [NgFor, ShowProductComponent, NgClass, NgIf],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  products : Product[]=
  [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/617SmcjHV0L._AC_SL1200_.jpg"},
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true , clicked: false, img: "https://m.media-amazon.com/images/I/61aiFCe6PpL.jpg"},
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/71KNiKiMbiL._AC_UF894,1000_QL80_.jpg"},
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true , clicked: false, img: "https://www.lg.com/content/dam/channel/wcms/mx/images/monitores/27mr400-b_awmq_enms_mx_c/gallery/fhd-27mr400-galley-02-2010.jpg/_jcr_content/renditions/thum-1600x1062.jpeg"},
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/61CJJ297IJL._AC_UF894,1000_QL80_.jpg"},
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false , clicked: false, img: "https://www.radioshack.com.mx/store/medias/75119.jpg-515ftw?context=bWFzdGVyfHJvb3R8NjkwMTN8aW1hZ2UvanBlZ3xhRGd3TDJoaU1DODRPVGt5T1RBMk1qRTFORFUwTG1wd1p3fGUyOWQxZDBlYzBkZjAyNDBkYmRiYTFhMTkxYzYyY2FkNzE5MTk1ODMxMTU0MTA3MjY3NzUwNThlZWNhNDRlOTM"},
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true , clicked: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtJVEuGfPe6KsG_NYGy4wKKxnnPNfvQBwyQ&s"},
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/61fbchh-MsL.jpg"},
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true , clicked: false, img: "https://m.media-amazon.com/images/I/61Ii23HTtNL.jpg"},
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg"},
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true , clicked: false, img: "https://http2.mlstatic.com/D_NQ_NP_853856-MLU70500847636_072023-O.webp"},
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/81-rvqTiJnL.jpg"},
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true , clicked: false, img: "https://m.media-amazon.com/images/I/51Q99CZv-SL._AC_UF894,1000_QL80_.jpg"},
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false , clicked: false, img: "https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg"},
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true , clicked: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmGZwl3lcegg5dYq0QLc7k5Wcm2zfqwNOMA&s"},
  ]

  currentProduct: any = null

  changeSelected(product: any): void{
    this.currentProduct= product;
  }
}
