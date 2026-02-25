import { Component, Input } from '@angular/core'; // Добавляем Input
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  // @Input означает: "этот массив придет ко мне от родителя"
  @Input() products: Product[] = [];

// Метод удаления из списка
  onRemoveProduct(index: number) {
    this.products.splice(index, 1);
  }



  
}
