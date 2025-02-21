import { useSelector, useStore } from "../../store";
import "./count.component.scss";

interface CountProps {
  // count: number;
}
const Count = (props: CountProps) => {
  const cartItemsById = useSelector((s) => s.cartItemsById);

  const total = Object.values(cartItemsById).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // console.log("total", total);

  return (
    <div
      style={{
        backgroundColor: "#1B2728",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        color: "#ffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
      }}
    >
      {total}
    </div>
  );
};

export default Count;
