import React from "react";
import "./nav-top.component.scss";
import { useSelector, useStore } from "../../../store";

interface NavTopProps {
  // children?: React.ReactNode;
}
export interface navTopPanel {
  href: string;
  title: string;
}

const NavTop = (props: NavTopProps) => {
  const store = useStore();
  const navTopPanel = useSelector((state) => state.navTopPanel);

  return (
    <div className="NavTop">
      <div className="NavTop__container">
        <div className="NavTop__tel-container ">
          <div>+7 777 777-77-77</div>
          <div className="NavTop__tel-circle "></div>
          <div>+7 777 777-77-77</div>
        </div>

        <div className="NavTop__nav-panel">
          <ul>
            {navTopPanel.map((item) => (
              <li className="NavTop__nav-panel-li" key={item.href}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
