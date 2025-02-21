import React from "react";
import shallowEqual from "shallowequal";
import { navTopPanel } from "./components/header/nav-top/nav-top.component";
import NewItems from "./data/new-items.object";
import { CartItemsById } from "./interfaces/product.interface";

interface NewItems {
  href: string;
  imgSrc: string;
  title: string;
  price: number;
}
interface Bestsellers {
  href: string;
  imgSrc: string;
  title: string;
  price: number;
}

interface HotPrice {
  href: string;
  imgSrc: string;
  title: string;
  price: number;
}
interface AllGoods {
  id: number;
  href: string;
  imgSrc: string;
  title: string;
  price: number;
}

interface BigCard {
  id: number;
  imgSrc: string;
  title: string;
}

interface StoreState {
  navTopPanel: navTopPanel[];
  newItems: NewItems[];
  bestsellers: Bestsellers[];
  hotPrice: HotPrice[];
  countGoods: number;
  allGoods: AllGoods[];
  bigCard: BigCard[];
  cartItemsById: CartItemsById;
}

type StoreListener = (state: StoreState) => void;

export default class Store {
  private _state: StoreState;
  private _listeners = new Set<StoreListener>();

  constructor(initValue: StoreState) {
    this._state = initValue;
  }

  subscribe(listener: StoreListener) {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  get(): StoreState {
    return this._state;
  }

  set(state: StoreState): void {
    this._state = state;
    this._listeners.forEach((listener) => listener(state));
  }
}

export const StoreContext = React.createContext({} as Store);
export const useStore = () => React.useContext(StoreContext);

export const useSelector = <T,>(selector: (state: StoreState) => T) => {
  const store = useStore();

  const [state, setState] = React.useState(selector(store.get()));

  React.useEffect(() => {
    const unsubscribe = store.subscribe((state) => {
      setState((prev) => {
        const next = selector(state);
        return shallowEqual(prev, next) ? prev : next;
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return state;
};
