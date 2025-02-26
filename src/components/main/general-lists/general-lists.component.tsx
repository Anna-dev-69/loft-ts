import { useRef, useState } from "react";
import { useSelector } from "../../../store";
import GeneralListCard from "./general-list-card/general-list-card.component";
import "./general-lists.component.scss";

const GeneralLists = () => {
  const generalList = useSelector((s) => s.generalList);

  const [visibleLi, setVisibleLi] = useState(false);
  const [nameButton, setNameButton] = useState<any[]>([]);

  const handleClickVisible = (index: number) => {
    const newButton = [...nameButton];
    newButton[index] = !newButton[index];
    setNameButton(newButton);
    setVisibleLi((p) => !p);
  };

  const text = !visibleLi ? "Еще +" : "Скрыть";

  return (
    <div className="GeneralLists">
      <div
        className="GeneralLists__container"
        style={visibleLi ? { height: "fit-content" } : {}}
      >
        <ul className="GeneralLists__container-ul">
          {generalList.map((item, index) => {
            return (
              <li
                style={
                  nameButton[index] === index
                    ? { overflow: "hidden" }
                    : { overflow: "visible", height: "fit-content" }
                }
                className="GeneralLists__container-ul-li"
                key={item.title}
              >
                <GeneralListCard
                  visibleLi={visibleLi}
                  body={item.body}
                  imgSrc={item.imgSrc}
                  title={item.title}
                />
                {item.body.length > 8 && (
                  <div
                    style={{ width: "334px" }}
                    className="GeneralLists__container-ul-li-container-a"
                  >
                    <a
                      className="GeneralLists__container-ul-li-a"
                      onClick={() => handleClickVisible(index)}
                      style={
                        nameButton[index] === index
                          ? { display: "none" }
                          : {
                              color: "rgb(183, 155, 126)",
                              cursor: "pointer",
                              display: "inline",
                            }
                      }
                    >
                      {text}
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GeneralLists;
// visibleLi &&
// item.body.length < 8
