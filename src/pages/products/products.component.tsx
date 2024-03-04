import { Button } from 'antd';
import { useProductsStyles } from './products.style';
import { Lightning, Rocket } from 'assets/images/icons/product';
import { useState } from 'react';
import ProductsListComponent from 'core/shared/products-list/products-list.component';

const ProductsComponent = () => {
  const classes = useProductsStyles();
  const [selectedCategory,setSelectedCategory] = useState();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
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
                <Button
                  className={classes.availableProduct}
                  onClick={() => {
                    handleCategoryClick('availableProduct');
                  }}
                >
                  <Lightning />
                  <span>Available products</span>
                </Button>
                <Button
                  className={classes.availableUpcoming}
                  onClick={() => {
                    handleCategoryClick('upcoming');
                  }}
                >
                  <Rocket />
                  <span>Upcoming</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ProductsListComponent selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default ProductsComponent;
