import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  productCard: {
    textAlign: 'center',
    padding: rem(32),
    backgroundColor: colors.light,
    boxShadow: '0px 4px 16px 0px #12475F12',
  },
  iconProductCard: {
    display: 'inline-block',
    borderRadius: rem(50),
    padding: rem(17),
    border: `${rem(1)} solid ${colors.footBackground}`,
    backgroundColor: colors.footBackground,
  },
  productCardTitle: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(25),
    textAlign: 'center',
    color: colors.defaultTextColor,
    marginTop: rem(12),
  },
  productCardDesc: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '400',
    lineHeight: rem(25),
    textAlign: 'center',
    marginTop: rem(6),
    marginBottom: rem(32),
    color: colors.defaultTextColor,
  },
  productPrice: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '700',
    lineHeight: rem(20),
    textAlign: 'center',
    padding: rem(18),
    backgroundColor: colors.footBackground,
    borderRadius: rem(12),
    color: colors.defaultTextColor,
  },
};
export const useProductCardStykes = createUseStyles(styles);
