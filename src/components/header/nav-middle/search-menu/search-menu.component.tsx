import "./search-menu.component.scss";
import glass from "../../../../assets/glass.svg";
import { Link } from "react-router-dom";

interface SearchMenuProps {
  // visibleGoods: () => void;
}

const SearchMenu = (props: SearchMenuProps) => {
  return (
    <div className="SearchMenu">
      <input type="text" placeholder="Поиск" />
      <button>
        <Link to="/searchPage">
          <img src={glass} alt="" />
        </Link>
      </button>
    </div>
  );
};

export default SearchMenu;
