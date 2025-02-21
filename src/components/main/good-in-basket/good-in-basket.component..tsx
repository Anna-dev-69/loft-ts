import { useState } from "react";
import "./good-in-basket.component.scss";
import cross from "../../../assets/cross.svg";
import Result from "./result/result.component";

interface GoodInBasketProps {
  imgSrc: string;
  title: string;
  price: number;
  // quantity: number;
  count: number;
  addGood: () => void;
  removeGood: () => void;
  totalSum: number;
  totalPrice: number;
  onClose: () => void;
}

const GoodInBasket = (props: GoodInBasketProps) => {
  // const [visible, setVisible] = useState(false);

  return (
    <div
      // style={visible ? { display: "block" } : { display: "none" }}
      className="GoodInBasket"
    >
      <div className="GoodInBasket__container">
        <img
          style={{ width: "162px", height: "162px" }}
          src={props.imgSrc}
          alt=""
        />

        <div className="GoodInBasket__container-title">
          <div className="GoodInBasket__container-title-title">
            {props.title}
          </div>
          <div className="GoodInBasket__container-title-price">
            {props.price}.00 р
          </div>
          <div className="GoodInBasket__button-container-and-price">
            <div className="GoodInBasket__button-container">
              <button onClick={props.removeGood}>-</button>
              <div> {props.count}</div>
              <button onClick={props.addGood}>+</button>
            </div>
            <div className="GoodInBasket__button-container-price">
              {props.totalPrice}.00 р
            </div>
          </div>
          <img
            onClick={props.onClose}
            style={{
              width: "26px",
              height: "26px",
              filter: "var( --filter-cross)",
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
            }}
            src={cross}
            alt=""
          />
        </div>
      </div>
      <div className="GoodInBasket__container-price"></div>
    </div>
  );
};

export default GoodInBasket;
