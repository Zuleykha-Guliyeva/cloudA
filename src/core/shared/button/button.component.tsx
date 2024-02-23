import { Link } from "react-router-dom";
import { useButtonStyles } from "./button.style";

const ButtonComponent = ({text,className}) => {
const classes = useButtonStyles();
return (
  <>
    <Link to='' className={`${classes[className]}`}>{text}</Link>
  </>
);
}
export default ButtonComponent;