import BigCardsGoods from "./big-cards-goods/big-cards-goods.component";
import Decor from "./decor/decor.component";
import "./main.component.scss";
import NewItems from "./new items/new-items.component";
import SpecialOffer from "./special-offer/special-offer.component";

const Main = () => {
  return (
    <div>
      <Decor />
      {/* <SpecialOffer /> */}
      <NewItems />
      <BigCardsGoods />
    </div>
  );
};

export default Main;
