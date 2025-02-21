import Store from "../store";
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

const addGood = (store: Store, product: Product) => {
  const currentState = store.get();

  const currentItemsById: CartItemsById = { ...currentState.cartItemsById };

  if (!currentItemsById[product.id]) {
    currentItemsById[product.id] = {
      product: product,
      quantity: 1,
    };
  } else {
    currentItemsById[product.id] = {
      product: product,
      quantity: (currentItemsById[product.id].quantity += 1),
    };
  }
  store.set({ ...currentState, cartItemsById: currentItemsById });
};

export default addGood;
