import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  partnersSlider: {
    paddingLeft: rem(49),
    display: 'relative',
    '& .slick-prev': {
      left: '0',
      transform: 'translate(0, -50%)',
      top: '25%',
    },
    '& .slick-next': {
      left: '0',
      transform: 'translate(0, -50%)',
      top: rem(175),
      display: 'none',
    },
    '& .slick-prev::before': {
      display: 'none',
    },
    '& .slick-next::before': {
      display: 'none',
    },
  },
  sliderItem: {
    textAlign: 'center',
  },
  partnersSlideItem: {
    textAlign: 'center',
    display: 'flex!important',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',

    '& $partnersLogoBackground': {
      width: '47%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colors.light,
      borderRadius: rem(28),
      padding: `${rem(45)}  ${rem(37)}`,
      height: rem(130),
      marginBottom: rem(32),
    },
    '& img': {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
  },
  partnersLogoBackground: {
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  customArrowUp: {
    '& svg': {
      position: 'absolute',
      left: '0',
      right: 'auto',
      transform: 'translate(0, -50%)',
    },
  },
  customArrowDown: {
    '& svg': {
      position: 'absolute',
      left: '0',
      right: 'auto',
      transform: 'translate(0, -50%)',
    },
  },
};

export const usePartnersSlickComponent = createUseStyles(styles);
