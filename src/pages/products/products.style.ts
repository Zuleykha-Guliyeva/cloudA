import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  productsSec: {
    padding: `${rem(230)} ${rem(0)} ${rem(136)} ${rem(0)}`,
  },
  productssTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  availableProduct: {
    border: 'none',
    borderRadius: rem(50),
    backgroundColor: colors.availableBtn,
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: rem(26),
    '& svg': {
      marginRight: rem(8),
    },
    '& span': {
      color: colors.calcBtnBlue,
    },
  },
  availableUpcoming: {
    border: 'none',
    borderRadius: rem(50),
    display: 'inline-flex',
    alignItems: 'center',
    '& svg': {
      marginRight: rem(8),
    },
    '& span': {
      color: colors.defaultTextColor,
    },
  },
};

export const useProductsStyles = createUseStyles(styles);
