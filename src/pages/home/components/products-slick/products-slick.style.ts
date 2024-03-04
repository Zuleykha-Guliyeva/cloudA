import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  productsSlider: {
    display: 'flex!important',
    justifyContent: 'space-around!important',
    flexDrection: 'row',
    marginTop: rem(55),
  },
  productsSlideItem: {
    width: '90%',
    textAlign: ''
  },
};

export const useProductsSlickComponent = createUseStyles(styles);
