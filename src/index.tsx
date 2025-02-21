import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./_variables.css";
import App from "./App";
import Store, { StoreContext } from "./store";
import navTopPanel from "./data/navTopPanel";
import newItems from "./data/new-items.object";
import bestsellers from "./data/bestsellers.object";
import hotPrice from "./data/hot-price.object";
import allGoods from "./data/all-goods";
import bigCard from "./data/big-card.object";

const countGoods: number = 0;
const cartItemsById = {};

const store = new Store({
  navTopPanel,
  newItems,
  bestsellers,
  hotPrice,
  countGoods,
  allGoods,
  bigCard,
  cartItemsById,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
