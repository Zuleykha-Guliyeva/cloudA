import { useCategoryStyles } from "./category.style";

const CategoryComponent = ({text}) => {
    const classes = useCategoryStyles();
    return <span className={classes.category}>{text}</span>;
};
export default CategoryComponent;