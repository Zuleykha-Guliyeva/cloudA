import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProductsSlickComponent } from './products-slick.style';
import ProductCardComponent from 'core/shared/product-card/product-card.component';

const ProductsSlickComponent = ({ products }) => {
  const classes = useProductsSlickComponent();  
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {products &&
        products.map((product) => (
          <div className={classes.productsSlider}>
            <div className={classes.productsSlideItem}>
              <ProductCardComponent
                key={product.id}
                title={product.title}
                description={product.description}
                icon={product.icon}
                price={product.price}
                id={product.id}
              />
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default ProductsSlickComponent;
