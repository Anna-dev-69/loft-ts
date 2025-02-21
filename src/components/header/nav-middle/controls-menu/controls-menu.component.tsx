import "./controls-menu.component.scss";
import user from "../../../../assets/user.svg";
import compare from "../../../../assets/compare.svg";
import cart from "../../../../assets/cart.svg";
import Count from "../../../count/count.component";
import { useState } from "react";
import { useSelector } from "../../../../store";
import { Link } from "react-router-dom";

interface ControlsMenuProps {
  // count: number;
}
const ControlsMenu = (props: ControlsMenuProps) => {
  // const [countGoods, setCountGoods] = useState(0);

  // console.log("cartItemsById", cartItemsById);

  return (
    <div className="ControlsMenu">
      <div className="ControlsMenu__div">
        <a>
          <img src={user} />
        </a>
      </div>
      <div className="ControlsMenu__div">
        <a>
          <img src={compare} />
        </a>
      </div>
      <div className="ControlsMenu__cart-container">
        <div className="ControlsMenu__cart-container-count">
          <Count />
        </div>

        <div>
          <Link to="/basketPage">
            <img src={cart} alt="Basket" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlsMenu;
