import serviceList from "../../data/service-list";
import Logo from "../logo/logo.component";
import "./footer.component.scss";

import telegram from "../../assets/telegram.svg";
import vk from "../../assets/vk.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div>
          <Logo width="180px" />
        </div>
        <div className="Footer__container-info">
          <div className="Footer__container-service">
            <ul className="Footer__container-service-ul">
              {serviceList.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="Footer__container-contacts">
            <div className="Footer__contacts">
              <div style={{ fontSize: "17px", fontWeight: 600 }}>Контакты</div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <div>+7 777 777-77-77</div>
                <div
                  style={{
                    height: "26px",
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                ></div>
                <div>+7 777 777-77-77</div>
              </div>
              <div>г. Москва, 1-я Тверская-Ямская улица, дом 21</div>
            </div>
            <div className="Footer__social-network">
              <img src={telegram} alt="" /> <img src={vk} alt="" />{" "}
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
