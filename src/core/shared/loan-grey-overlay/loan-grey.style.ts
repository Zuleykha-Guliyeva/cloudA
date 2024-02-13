import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  loanCalculator: {
    position: 'relative',
    marginBottom: rem(300),
    padding: `${rem(65) + ' ' + rem(60) + ' ' + rem(65) + ' ' + rem(0)}`,
    [breakpoint(991)]: {
      marginBottom: `${rem(90)}!important`,
      padding: `${rem(16) + ' ' + rem(16)}`,
    },
  },
  overlay: {
    width: '82%',
    height: rem(580),
    background: colors.greySec,
    position: 'absolute',
    top: rem(0),
    right: rem(0),
    zIndex: '-5',
    [breakpoint(991)]: {
      width: '100%',
      height: rem(1100),
    },
  },
  productsTitle: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(59),
  },
  productsDescription: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
  },
  padding: {
    marginBottom: rem(160),
  },
  aboutOverlay: {
    height: '100%',
  },
  absolute: {},
};
export const useLoanGreyStyles = createUseStyles(styles);
