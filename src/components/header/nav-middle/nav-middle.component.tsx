import { Link } from "react-router-dom";
import Logo from "../../logo/logo.component";
import ControlsMenu from "./controls-menu/controls-menu.component";
import "./nav-middle.component.scss";
import SearchMenu from "./search-menu/search-menu.component";

interface NavMiddleProps {}
const NavMiddle = (props: NavMiddleProps) => {
  return (
    <div className="NavMiddle">
      <div className="NavMiddle__container">
        <div className="NavMiddle__container-logo">
          <Link to="/">
            <Logo width="100px" />
          </Link>
        </div>

        <div>
          <SearchMenu />
        </div>
        <div>
          <ControlsMenu />
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
