import { Link } from "react-router-dom";
import { useButtonStyles } from "./button.style";

const ButtonComponent = ({text,className,url}) => {
const classes = useButtonStyles();
return (
  <>
    <Link to={url} className={`${classes[className]}`}>{text}</Link>
  </>
);
}
export default ButtonComponent;