import { createUseStyles } from 'react-jss';

const styles = {
  productsSlider: {},
  productsSlideItems: {
    display: 'flex!important',
    justifyContent: 'space-between!important',
    flexDrection: 'row',
  },
  productsSlideItem: {
    width: '32%',
  },
};

export const useProductsSlickComponent = createUseStyles(styles);
