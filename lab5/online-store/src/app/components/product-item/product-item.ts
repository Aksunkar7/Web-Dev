import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<void>(); // Событие удаления

isLiked = false;

increaseLike() {
  if (!this.isLiked) {
    this.product.likes++;
    this.isLiked = true; // Помечаем, что пользователь нажал лайк
  }
}

// increaseLike() {
//   if (this.isLiked) {
//     // Если уже лайкнуто — убираем лайк
//     this.product.likes--;
//     this.isLiked = false;
//   } else {
//     // Если еще не лайкнуто — добавляем
//     this.product.likes++;
//     this.isLiked = true;
//   }
// }

  deleteProduct() {
    // if (confirm(`Вы уверены, что хотите удалить ${this.product.name}?`)) {
      this.remove.emit(); // Отправляем сигнал родителю
    // }
  }

  // Метод для смены картинки у конкретного товара  
  changeImage(newImage: string) {
    this.product.image = newImage;
  }

  shareOnWhatsapp(link: string) {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри, какой крутой товар я нашел: ' + link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(link: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('Посмотри на это!')}`;
    window.open(url, '_blank');
  }
}