import { useItemStyles } from "./item.style";
const ItemComponent = ({ classN }) => {
  const classes = useItemStyles();
  const classItem = classN ? classes[classN] : ''
  return (
    <></>
  );
};
export default ItemComponent;