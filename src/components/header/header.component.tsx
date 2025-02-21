import NavBottom from "./nav-bottom/nav-bottom.component";
import NavMiddle from "./nav-middle/nav-middle.component";
import NavTop from "./nav-top/nav-top.component";

interface HeaderProps {}
const Header = (props: HeaderProps) => {
  return (
    <div>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </div>
  );
};

export default Header;
