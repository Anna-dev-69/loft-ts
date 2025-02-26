import { useState } from "react";
import Header from "../../components/header/header.component";
import GoodInBasket from "../../components/main/good-in-basket/good-in-basket.component.";
import { CartItem } from "../../interfaces/product.interface";
import Store, { useSelector, useStore } from "../../store";
import "./basket-page.scss";
import Result from "../../components/main/good-in-basket/result/result.component";
import Footer from "../../components/footer/footer.component";
import removeItems from "../../data/remove-items";

const BasketPage = () => {
  const store = useStore();
  const cartItemsById = useSelector((s) => s.cartItemsById);
  const [visible, setVisible] = useState<boolean[]>([]);

  const selectedItems = Object.entries(cartItemsById).map(
    (entry: any, index) => {
      const item = entry[1] as CartItem;

      return item.product;
    }
  );

  const [selectedGood, setSelectedGood] = useState(
    new Array(selectedItems.length).fill(1)
  );

  const totalAmountArr = Object.entries(cartItemsById).map(
    (entry: any, index) => {
      const item = entry[1] as CartItem;
      return item.product.price * selectedGood[index];
    }
  );
  // console.log("selectedItems", selectedItems);
  // const countGoods = selectedGood.reduce((acc, item) => acc + item, 0);

  const addGood = (index: number) => {
    const selectedGoods = [...selectedGood];

    if (selectedGoods[index] || selectedGoods[index] === 0) {
      selectedGoods[index] += 1;
      setSelectedGood(selectedGoods);
    }
  };

  const removeGood = (index: number) => {
    const selectedGoods = [...selectedGood];
    if (selectedGoods[index]) {
      selectedGoods[index] -= 1;
      setSelectedGood(selectedGoods);
    }
  };

  const totalSum = totalAmountArr.reduce((acc, item) => acc + item, 0);
  // console.log("totalAmountArr", totalAmountArr);
  // console.log("totalSum", totalSum);

  return (
    <div className="BasketPage">
      <Header />
      <div className="BasketPage__container">
        <div className="BasketPage__container-inner">
          <div className="BasketPage__container-title">Корзина</div>
          <div className="BasketPage__container-goods-and-total">
            <div className="BasketPage__container-goods">
              {Object.keys(store.get().cartItemsById).length === 0 ? (
                <p
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "2rem",
                    color: "#333333",
                  }}
                >
                  Ваша корзина пуста
                </p>
              ) : (
                <ul className="BasketPage__container-goods-ul">
                  {Object.entries(cartItemsById).map((entry: any, index) => {
                    const itemId = entry[0] as number;
                    const item = entry[1] as CartItem;

                    return (
                      <li
                        className="BasketPage__container-goods-ul-li"
                        key={itemId}
                      >
                        <GoodInBasket
                          onClose={() => removeItems(store, index)}
                          totalSum={totalSum}
                          addGood={() => addGood(index)}
                          removeGood={() => removeGood(index)}
                          count={selectedGood[index]}
                          imgSrc={item.product.imgSrc}
                          price={item.product.price}
                          title={item.product.title}
                          totalPrice={totalAmountArr[index]}
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div>
              <Result price={totalSum} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BasketPage;
