export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;

  // Lab 5:
  categoryId: number;
  likes: number; // старт 0
}