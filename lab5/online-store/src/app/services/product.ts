import { Injectable } from '@angular/core';
import { CATEGORIES, PRODUCTS } from '../data/products-data';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}