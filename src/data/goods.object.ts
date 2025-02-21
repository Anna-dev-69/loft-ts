import NewItems from "../components/main/new items/new-items.component";
import { useSelector, useStore } from "../store";
import bestsellers from "./bestsellers.object";
import hotPrice from "./hot-price.object";
import newItems from "./new-items.object";

// const store = useStore();
// const newItems = useSelector((s) => s.newItems);
// const bestsellers = useSelector((s) => s.bestsellers);
// const hotPrice = useSelector((s) => s.hotPrice);

const goods = [
  {
    id: 0,
    title: "Новинки",
    listItems: newItems,
  },
  {
    id: 1,
    title: "Бестселлеры",
    listItems: bestsellers,
  },
  {
    id: 2,
    title: "Горячая цена",
    listItems: hotPrice,
  },
];

export default goods;
