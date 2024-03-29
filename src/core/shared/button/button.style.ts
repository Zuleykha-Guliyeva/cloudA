import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  aboutBtn: {
    textDecoration: 'none',
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.light,
    backgroundColor: colors.calcBtnBlue,
    border: 'none',
    borderRadius: rem(41),
    display: 'inline-block',
    textAlign: 'center',
    padding: `${rem(16)}  ${rem(56)}`,
    marginTop: rem(48),
  },
  girisBtn: {
    textDecoration: 'none',
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '900',
    lineHeight: rem(22),
    backgroundColor: colors.light,
    color: colors.calcBtnBlue,
    borderRadius: rem(41),
    border: `${rem(1)} solid ${colors.calcBtnBlue}`,
    padding: `${rem(16)}  ${rem(77)}`,
  },
  textStyle: {
    color: colors.light,
  }
};
export const useButtonStyles = createUseStyles(styles);
