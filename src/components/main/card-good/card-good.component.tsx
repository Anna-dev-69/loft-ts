import "./card-good.component.scss";
import heart from "../../../assets/heart.svg";

interface CardGoodProps {
  imgSrc: string;
  title: string;
  price: number;
  // like: boolean[];
  onLike: () => void;
  isLike: boolean;
  key: number;
}

const CardGood = (props: CardGoodProps) => {
  return (
    <div className="CardGood">
      <div className="CardGood__container">
        <img
          key={props.key}
          onClick={props.onLike}
          style={props.isLike ? { filter: "var(--filter-like)" } : {}}
          className="CardGood__heart"
          src={heart}
          alt=""
        />
        <img className="CardGood__img" src={props.imgSrc} alt="" />
      </div>
      <div className="CardGood__title">{props.title}</div>
      <div className="CardGood__price">{props.price} p</div>
    </div>
  );
};

export default CardGood;
