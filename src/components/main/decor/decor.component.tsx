import SpecialOffer from "../special-offer/special-offer.component";
import "./decor.component.scss";
import d1 from "../../../assets/d1.jpg";
import d2 from "../../../assets/d2.jpg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Decor = () => {
  return (
    <div className="Decor">
      <div className="Decor__container">
        <div>
          <SpecialOffer />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxHeight: "569px",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                height: "234px",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
            >
              <img style={{ width: "422px", height: "150%" }} src={d1} alt="" />
            </div>
            <div>Декор для дома</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                height: "234px",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
            >
              <img style={{ borderRadius: "0.5rem" }} src={d2} alt="" />
            </div>
            <div>Растения</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decor;
