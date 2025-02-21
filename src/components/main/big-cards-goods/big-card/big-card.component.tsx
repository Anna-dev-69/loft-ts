import "./big-card.component.scss";

interface BigCardProps {
  imgSrc: string;
  title: string;
}

const BigCard = (props: BigCardProps) => {
  return (
    <div className="BigCard">
      <div>
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="BigCard__title">{props.title}</div>
    </div>
  );
};
export default BigCard;
