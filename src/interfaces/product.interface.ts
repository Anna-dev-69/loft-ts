export interface Product {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartItemsById {
  [id: number]: CartItem;
}
