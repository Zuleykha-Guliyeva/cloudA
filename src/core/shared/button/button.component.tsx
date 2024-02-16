import { useButtonStyles } from "./button.style";

const ButtonComponent = ({text,className}) => {
const classes = useButtonStyles();
return (
  <>
    <button className={`${classes[className]}`}>{text}</button>
  </>
);
}
export default ButtonComponent;