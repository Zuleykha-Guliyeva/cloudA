import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProductsSlickComponent } from './products-slick.style';
import ProductCardComponent from 'core/shared/product-card/product-card.component';

const ProductsSlickComponent = ({ title }) => {
  const classes = useProductsSlickComponent();
  const settings = {
    autoplay: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings} className={classes.productsSlider}>
      <div className={classes.productsSlideItems}>
        <div className={classes.productsSlideItem}>
        </div>
        <div className={classes.productsSlideItem}>
          <ProductCardComponent title={title} />
        </div>
        <div className={classes.productsSlideItem}>
          <ProductCardComponent title={title} />
        </div>
      </div>

      <div className={classes.productsSlideItems}>
        <div className={classes.productsSlideItem}>
          <ProductCardComponent title={title} />
        </div>
        <div className={classes.productsSlideItem}>
          <ProductCardComponent title={title} />
        </div>
        <div className={classes.productsSlideItem}>
          <ProductCardComponent title={title} />
        </div>
      </div>
    </Slider>
  );
};

export default ProductsSlickComponent;
