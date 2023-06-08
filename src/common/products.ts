export interface Products {
  id: number;
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: string;
  quantity: number;
  description: string;
}
export interface createProduct {
  name: string;
  price: number;
  images: string[];
  categoryId: string;
  quantity: number;
  description: string;
}
