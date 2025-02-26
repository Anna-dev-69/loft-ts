import { useEffect, useRef, useState } from "react";
import "./general-list-card.component.scss";

interface GeneralListCardProps {
  imgSrc: string;
  title: string;
  body: string[];
  visibleLi: boolean;
  // onClickVisible: () => void;
}

const GeneralListCard = (props: GeneralListCardProps) => {
  return (
    <div className="GeneralListCard">
      <div className="GeneralListCard__img-container">
        <img
          style={{ width: "150%", height: "100%", borderRadius: "0.5rem" }}
          src={props.imgSrc}
          alt=""
        />
      </div>
      <div className="GeneralListCard__container-text">
        <div
          style={{
            fontSize: "22.5px",
            color: "#333333",
            fontFamily: "var(--ff)",
          }}
        >
          {props.title}
        </div>
        <div className="GeneralListCard__container-div-ul">
          <ul
            className="GeneralListCard__container-text-ul"
            style={
              !props.visibleLi
                ? { overflow: "hidden" }
                : { overflow: "visible", height: "fit-content" }
            }
          >
            {props.body.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneralListCard;
