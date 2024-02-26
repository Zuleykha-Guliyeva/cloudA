import { useProductCardStykes } from "./product-card.style";
import setting from 'assets/images/icons/products/cpu-setting.png';

const ProductCardComponent = ({title}) => {
    const classes = useProductCardStykes();
    return (
      <div className={classes.productCard}>
        <div className={classes.iconProductCard}>
          <img src={setting} alt='' />
        </div>
        <p className={classes.productCardTitle}>IAS</p>
        <p className={classes.productCardDesc}>{title}</p>
        <span className={classes.productPrice}>235 AZN</span>
      </div>
    );
}
export default ProductCardComponent;