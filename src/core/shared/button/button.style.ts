import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  aboutBtn: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.light,
    backgroundColor: colors.calcBtnBlue,
    border: 'none',
    borderRadius: rem(41),
    padding: `${rem(16)}  ${rem(56)}`,
    marginTop: rem(48),
  },
  calculatorBtn: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.calcBtnBlue,
    border: 'none',
    borderRadius: rem(41),
    padding: `${rem(16)}  ${rem(56)}`,
  },
};
export const useButtonStyles = createUseStyles(styles);