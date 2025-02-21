import { useState } from "react";
import { CartItem } from "../interfaces/product.interface";
import Store, { useSelector, useStore } from "../store";

//store: { get: () => Store }

const TotalCount = () => {
  const store = useStore();

  const cartItemsById = useSelector((s) => s.cartItemsById);

  const selectedItem = Object.entries(cartItemsById).map(
    (entry: any, index) => {
      const item = entry[1] as CartItem;
      return item.product;
    }
  );

  const [selectedGood, setSelectedGood] = useState(
    new Array(selectedItem.length).fill(1)
  );

  const totalAmountArr = Object.entries(cartItemsById).map(
    (entry: any, index) => {
      const item = entry[1] as CartItem;
      return item.product.price * selectedGood[index];
    }
  );

  const countGoods = selectedGood.reduce((acc, item) => acc + item, 0);

  return countGoods;
};

export default TotalCount;
