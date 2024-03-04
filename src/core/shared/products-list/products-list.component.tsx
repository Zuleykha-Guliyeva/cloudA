import { useProducts } from 'pages/products/actions/products.query';
import { useProductsListStyles } from './products-list.style';
import ProductCardComponent from '../product-card/product-card.component';
import { useLocation } from 'react-router-dom';
import ProductsSlickComponent from 'pages/home/components/products-slick/products-slick.component';

const ProductsListComponent = ({ selectedCategory }) => {
  const classes = useProductsListStyles();
  const location = useLocation();
  const pathname = location.pathname;
  const { data } = useProducts();
  const filteredProducts = selectedCategory
    ? data?.filter((product) => product.category === selectedCategory)
    : data;
  return (
    <div className={classes.ProductsList}>
      {pathname === '/products' ? (
        <div className='row'>
          {filteredProducts?.map((product) => (
            <div key={product.id} className='col-md-4 mb-32'>
              <ProductCardComponent
                id={product.id}
                icon={product.icon}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <ProductsSlickComponent products={filteredProducts} />
      )}
    </div>
  );
};
export default ProductsListComponent;
