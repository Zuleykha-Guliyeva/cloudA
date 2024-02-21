import { Button } from "antd";
import { useProductsStyles } from "./products.style";
import { Lightning, Rocket } from 'assets/images/icons/product';
import ProductCardComponent from "core/shared/product-card/product-card.component";

const ProductsComponent = () => {
  const classes = useProductsStyles();
  // const { data } = useProducts();
  // console.log(data);
  return (
    <div className={classes.productsSec}>
      <div className='container'>
        <div className='row align-center mb-63'>
          <div className='col-md-5'>
            <p className={classes.productssTitle}>Products and services</p>
          </div>
          <div className='col-md-7'>
            <div className='row'>
              <div className='col-12 text-right'>
                <Button className={classes.availableProduct}>
                  <Lightning />
                  <span>Available products</span>
                </Button>
                <Button className={classes.availableUpcoming}>
                  <Rocket />
                  <span>Upcoming</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
          <div className='col-md-4 mb-32'>
            <ProductCardComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
