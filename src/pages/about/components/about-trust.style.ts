import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  trustCard: {
    marginBottom: rem(134),
  },
  trustImg: {
    maxWidth: '100%',
    paddingLeft: rem(100),
  },
  trustIconTitle: {
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '700',
    lineHeight: rem(11),
    color: colors.defaultTextColor,
    marginBottom: rem(17),
    marginLeft: rem(18),
  },
  trustIconDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    marginBottom: rem(58),
  },
  advantages: {
    '& $trustImg': {
      paddingLeft: 0,
      paddingRight: rem(100),
    },
  },
};

export const useAboutTrustStyle = createUseStyles(styles);