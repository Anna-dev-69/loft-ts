import { useState } from "react";
import addGood from "../../../data/addGood";
import { CartItemsById, Product } from "../../../interfaces/product.interface";
import { useSelector, useStore } from "../../../store";
import CardGood from "../card-good/card-good.component";
import "./goods-list.component.scss";

interface GoodsListProps {
  itemList: Product[];
}

const GoodsList = (props: GoodsListProps) => {
  const store = useStore();
  const [likes, setLikes] = useState<boolean[]>(
    new Array(props.itemList.length).fill(false)
  );

  const handleClickLike = (index: number) => {
    const newLike = [...likes];
    newLike[index] = !newLike[index];
    setLikes(newLike);
  };

  return (
    <div className="GoodsList">
      <ul className="GoodsList__ul">
        {props.itemList.map((item, index) => (
          <li key={item.title} className="GoodsList__ul-li">
            <div>
              <CardGood
                imgSrc={item.imgSrc}
                title={item.title}
                price={item.price}
              />
            </div>
            <button
              onClick={() => addGood(store, item)}
              className="GoodsList__button"
            >
              В корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodsList;
