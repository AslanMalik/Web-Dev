import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {
  product = input.required<Product>();

  // NEW: delete event (child -> parent)
  delete = output<number>();

  like() {
    this.product().likes += 1;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  whatsappShareUrl() {
    const p = this.product();
    const text = `Check out this product: ${p.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl() {
    const p = this.product();
    return `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  }

  stars() {
    const p = this.product();
    const full = Math.round(p.rating);
    return Array.from({ length: 5 }, (_, i) => (i < full ? '★' : '☆')).join('');
  }

  selectedIndex = 0;

  mainImage() {
    const p = this.product();
    return p.images?.[this.selectedIndex] ?? p.image;
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }
}
