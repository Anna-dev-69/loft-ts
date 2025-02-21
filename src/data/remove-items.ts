import { CartItem } from "../interfaces/product.interface";
import Store from "../store";

const removeItems = (store: Store, index: number) => {
  store.get();
  const currentState = store.get().cartItemsById;

  const filtered = Object.fromEntries(
    Object.entries(currentState).filter((item, i) => i !== index)
  );

  store.set({
    ...store.get(),
    cartItemsById: filtered,
  });
};

export default removeItems;
