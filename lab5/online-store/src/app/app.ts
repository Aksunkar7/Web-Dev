import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list'; // Импортируем список
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList], // Обязательно добавляем ProductListComponent сюда
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedProducts: Product[] = []; // Список товаров для выбранной категории
  selectedCategoryName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  // Когда нажали на категорию
  selectCategory(category: Category) {
    this.selectedCategoryName = category.name;
    // Фильтруем и сохраняем результат в отдельную переменную
    this.selectedProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}