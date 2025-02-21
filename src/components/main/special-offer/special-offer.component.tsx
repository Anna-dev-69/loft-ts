import "./special-offer.component.scss";
import spec1 from "../../../assets/spec1.jpg";
import spec2 from "../../../assets/spec2.jpg";
import { useEffect, useRef, useState } from "react";

interface SpecialOfferProps {
  // ref: React.RefObject<HTMLUListElement | null>;
  // onHandleNext: () => void;
  // dark: boolean;
}
const SpecialOffer = (props: SpecialOfferProps) => {
  const [targetUl, setTargetUl] = useState(false);
  const [darkLeft, setDarkLeft] = useState(true);
  const [darkRight, setDarkRight] = useState(true);

  const ulRef = useRef<HTMLUListElement>(null);
  const target = ulRef.current;

  // const handleMove = (next: boolean) => {
  //   if (target && target.children && target.children.length > 0) {
  //     const columnWidth = target.children[0].clientWidth;
  //     target.scrollLeft = target.scrollLeft ? 0 : columnWidth;
  //     console.log("columnWidth", columnWidth);
  //   }
  // };

  const handleNext = () => {
    if (target && target.children && target.children.length > 0) {
      const columnWidth = target.children[0].clientWidth;
      target.scrollLeft += columnWidth;

      setDarkRight(false);
      setDarkLeft(false);
    }
  };
  const handlePrev = () => {
    if (target && target.children && target.children.length > 0) {
      const columnWidth = target.children[0].clientWidth;
      target.scrollLeft -= columnWidth;
      setDarkRight(true);
      setDarkLeft(true);
    }
  };

  useEffect(() => {
    if (!target) {
      setTargetUl(true);

      // console.log("target", target);
    } else {
      // console.log("targetUl", targetUl);

      setTargetUl(false);
    }
    // console.log("targetUl", targetUl);
  }, []);

  return (
    <div className="SpecialOffer">
      <div className="SpecialOffer__container">
        <ul ref={ulRef} className="SpecialOffer__ul">
          <li className="SpecialOffer__ul-li">
            Специальное предложение для новых клиентов
          </li>
          <li className="SpecialOffer__ul-li-2">Новые коллекции</li>
        </ul>
      </div>

      <div className="SpecialOffer__button-container">
        <div
          style={
            darkLeft
              ? { backgroundColor: "rgb(183, 155, 126)" }
              : { backgroundColor: "rgb(243, 239, 234)" }
          }
          onClick={handlePrev}
        ></div>
        <div
          style={
            darkRight
              ? { backgroundColor: "rgb(243, 239, 234)" }
              : { backgroundColor: "rgb(183, 155, 126)" }
          }
          onClick={handleNext}
        ></div>
      </div>
    </div>
  );
};

export default SpecialOffer;
