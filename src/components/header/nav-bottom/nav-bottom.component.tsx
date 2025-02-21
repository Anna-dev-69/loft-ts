import navBottom from "../../../data/nav-bottom.object";
import "./nav-bottom.component.scss";

const NavBottom = () => {
  return (
    <div className="NavBottom">
      <div className="NavBottom__container">
        <div>Каталог</div>
        {navBottom.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.title}>{item.title}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default NavBottom;
