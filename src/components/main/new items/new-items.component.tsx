import { useState } from "react";
import goods from "../../../data/goods.object";
import { useSelector, useStore } from "../../../store";
import CardGood from "../card-good/card-good.component";
import "./new-items.component.scss";
import GoodsList from "../goods-list/goods-list.component";

interface NewItemsProps {}

const NewItems = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="NewItems">
      <div className="NewItems__container">
        <div className="NewItems__container-ul">
          <ul className="NewItems__ul">
            {goods.map((item, index) => {
              const isActive = index === currentTab;
              // console.log("item", item);
              return (
                <li key={item.id}>
                  <div
                    className="NewItems__container-tab-title"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentTab(index);
                    }}
                    style={
                      isActive
                        ? { color: "rgb(183, 155, 126)" }
                        : { borderBottom: "none" }
                    }
                  >
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <GoodsList itemList={goods[currentTab].listItems} />
        </div>
      </div>
    </div>
  );
};

export default NewItems;
