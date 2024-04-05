import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  aboutBtn: {
    textDecoration: 'none',
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
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
  loginBtn: {
    textDecoration: 'none',
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    backgroundColor: colors.light,
    color: colors.calcBtnBlue,
    borderRadius: rem(41),
    border: `${rem(1)} solid ${colors.calcBtnBlue}`,
    padding: `${rem(16)}  ${rem(77)}`,
  },
  verify: {
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    backgroundColor: colors.calcBtnBlue,
    color: colors.light,
    borderRadius: rem(41),
    border: 'none',
    padding: `${rem(16)}  ${rem(77)}`,
    marginTop: rem(44),
  },
  textStyle: {
    color: colors.light,
  },
};
export const useButtonStyles = createUseStyles(styles);
