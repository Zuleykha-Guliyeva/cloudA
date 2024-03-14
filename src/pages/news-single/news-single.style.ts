import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";
const styles = {
  singleNews: {
    paddingTop: rem(176),
    paddingBottom: rem(172),
  },
  newImg: {
    '& img': { maxWidth: '100%', marginBottom: rem(62) },
  },
  backIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  backSpan: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    color: colors.defaultTextColor,
    marginLeft: rem(12),
  },
  newsTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(51),
    color: colors.defaultTextColor,
    marginBottom: rem(32),
  },
  newsDate: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '700',
    lineHeight: rem(25),
    color: colors.calcBtnBlue,
    display: 'inline-block',
    marginBottom: rem(32),
  },
  newsDescription: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    display: 'inline-block',
  },
};

export const useNewsSingleStyles = createUseStyles(styles);