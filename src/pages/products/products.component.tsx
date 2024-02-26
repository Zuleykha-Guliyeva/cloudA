import { Button } from 'antd';
import { useProductsStyles } from './products.style';
import { Lightning, Rocket } from 'assets/images/icons/product';
import ProductCardComponent from 'core/shared/product-card/product-card.component';
import { useState } from 'react';

const ProductsComponent = () => {
  const classes = useProductsStyles();
  // const { data } = useProducts();
  // console.log(data);
  const products = [
    { id: 1, title: 'Infrastructure as a Service', category: 'product' },
    { id: 2, title: 'Platform as a Service', category: 'upcoming' },
    { id: 3, title: 'Software as a Service', category: 'product' },
    { id: 4, title: 'Archive as a Service', category: 'upcoming' },
    { id: 5, title: 'Networking service', category: 'product' },
  ];
  const [selectedCategory,setSelectedCategory] = useState();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
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
                    handleCategoryClick('product');
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
        <div className='row'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='col-md-4 mb-32'>
              <ProductCardComponent title={product.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
