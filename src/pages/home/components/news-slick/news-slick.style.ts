import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  newsSlider: {
    '& .slick-prev': {
      left: '76%!important',
      top: rem(-60),
    },
    '& .slick-next': {
      right: rem(168),
      top: rem(-60),
      transform: 'translate(0, -50%)',
      display: 'none',
    },
    '& .slick-prev::before': {
      display: 'none',
    },
    '& .slick-next::before': {
      display: 'none',
    },
    '& .slick-slide': {
      padding: '0 16px',
    },
  },
};

export const useNewsSlickComponent = createUseStyles(styles);
