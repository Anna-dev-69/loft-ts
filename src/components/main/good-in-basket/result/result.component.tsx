import "./result.component.scss";

interface ResultProps {
  price: number;
}

const Result = (props: ResultProps) => {
  return (
    <div className="Result">
      <div className="Result__title">
        <div style={{ fontWeight: 600 }}>Итого к оплате:</div>
        <div className="Result__price">{props.price}.00 р</div>
      </div>
      <button className="Result__button">Оформить заказ</button>
    </div>
  );
};

export default Result;
