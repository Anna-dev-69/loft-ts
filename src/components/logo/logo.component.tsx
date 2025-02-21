import "./logo.component.scss";
import logo from "../../assets/logo.svg";

interface LogoProps {
  width: string;
}

const Logo = (props: LogoProps) => {
  return <img style={{ width: props.width }} src={logo} alt="" />;
};

export default Logo;
