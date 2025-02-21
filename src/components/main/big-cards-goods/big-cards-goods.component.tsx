import { useSelector } from "../../../store";
import BigCard from "./big-card/big-card.component";
import "./big-cards-goods.component.scss";

const BigCardsGoods = () => {
  const bigCard = useSelector((s) => s.bigCard);

  return (
    <div className="BigCardsGoods">
      <div className="BigCardsGoods__container">
        <ul className="BigCardsGoods__container-ul">
          {bigCard.map((item, index) => (
            <li className={`BigCardsGoods__li-${index + 1}`} key={item.id}>
              <BigCard imgSrc={item.imgSrc} title={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BigCardsGoods;
