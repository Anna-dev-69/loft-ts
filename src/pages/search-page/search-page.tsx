import Header from "../../components/header/header.component";
import "./search-page.scss";
import glass from "../../assets/glass.svg";
import { useSelector, useStore } from "../../store";
import { useEffect, useState } from "react";
// import CardGood from "../../components/main/card-good/card-good.component";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import addGood from "../../data/addGood";
import CardGood from "../../components/main/card-good/card-good.component";

const SearchPage = () => {
  const store = useStore();
  const goods = useSelector((s) => s.allGoods);

  const [value, setValue] = useState("");
  const [filterGoods, setFilterGoods] = useState(goods);
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState<boolean[]>([]);
  const [isLike, setIsLike] = useState(false);

  // const handleClickLike = (index: number) => {
  //   const newLike = [...like];
  //   newLike[index] = !newLike[index];

  //   setIsLike((p) => !p);
  //   setLike(newLike);
  // };

  const handleChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const filtered = store
      .get()
      .allGoods.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    setFilterGoods(filtered);
  }, [value]);

  return (
    <div className="SearchPage">
      <Header />
      <div className="SearchPage__body">
        <div className="SearchPage__container">
          <div className="SearchPage__container-links">
            <Link to="/">
              <div style={{ color: "rgb(205, 205, 205)" }}>Главная</div>
            </Link>

            <div>/</div>
            <div>Поиск</div>
          </div>
          <div className="SearchPage__container-search">
            <h1>Поиск</h1>
            <div className="SearchPage__container-search-and-button">
              <div className="SearchPage__container-search-container">
                <input
                  value={value}
                  onChange={handleChangeValue}
                  type="text"
                  placeholder="Поиск"
                />

                <button onClick={() => setVisible(true)}>
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={glass}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <ul className="SearchPage__container-goods-ul">
              {visible ? (
                filterGoods.map((item, index) => (
                  <li
                    key={item.id}
                    className="SearchPage__container-goods-ul-li"
                  >
                    <CardGood
                      // keyGood={index}
                      // isLike={isLike}
                      // onLike={() => handleClickLike(index)}
                      imgSrc={item.imgSrc}
                      title={item.title}
                      price={item.price}
                    />

                    <button
                      onClick={() => addGood(store, item)}
                      className="SearchPage__container-goods-ul-li-button"
                    >
                      В корзину
                    </button>
                  </li>
                ))
              ) : (
                <h2 style={{ marginTop: "5rem" }}>
                  По вашему запросу ничего не найдено
                </h2>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="SearchPage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
