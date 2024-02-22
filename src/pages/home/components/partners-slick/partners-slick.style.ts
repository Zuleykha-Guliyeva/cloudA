import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  slider: {},
  sliderItem: {
    textAlign: 'center',
  },
  customDots: {
    display: 'flex!important',
    listStyle: 'none',
    padding: 0,
    marginTop: rem(115),
    '& button': {
      width: rem(60),
      marginRight: rem(26),
      background: colors.homeSliderDots,
      border: 'none',
      color: 'transparent',
      cursor: 'pointer',
      '&:hover, &.slick-active': {
        backgroundColor: `${colors.light} !important`,
      },
    },
  },
  partnersSlideItem: {
    position: 'relative!important',
    textAlign: 'center',
    display: 'flex!important',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    '& $partnersLogoBackground': {
      width: '48%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colors.light,
      borderRadius: rem(28),
      padding: `${rem(45)}  ${rem(37)}`,
      height: rem(130),
      marginBottom: rem(30),
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
    '& slick-prev': {
      display: 'absolute!important',
      top: '150px!important',
    },
  },
  customArrowDown: {},
};

export const usePartnersSlickComponent = createUseStyles(styles);
