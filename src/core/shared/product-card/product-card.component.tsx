import { useProductCardStyles } from './product-card.style';

const ProductCardComponent = ({ icon, title, description, price, id }) => {
  const classes = useProductCardStyles();

  return (
    <div key={id} className={classes.productCard}>
      <div className={classes.iconProductCard}>
        <img src={icon} alt='' />
      </div>
      <p className={classes.productCardTitle}>{title}</p>
      <p className={classes.productCardDesc}>{description}</p>
      <span className={classes.productPrice}>{price}</span>
    </div>
  );
};

export default ProductCardComponent;
