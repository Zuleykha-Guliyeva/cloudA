import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { breakpoint } from "assets/styles/abstracts/mixins";
import { createUseStyles } from "react-jss"

const styles = {
  leadTitle: {
    fontSize: rem(60),
    lineHeight: rem(80),
    fontWeight: '800',
    letterSpacing: rem(0),
    fontFamily: fonts.font,
    color: colors.navActiveText,
    textAlign: 'left',
    [breakpoint(991)]: {
      fontSize: rem(36),
      lineHeight: rem(47),
      fontWeight: '800',
    },
  },
  leadDescription: {
    '& p': {
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '400',
      lineHeight: rem(22),
      letterSpacing: rem(0),
      textAlign: 'left',
      color: colors.navText,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  leadSubTitle: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(58),
    letterSpacing: rem(0),
    textAlign: 'left',
    marginBottom: rem(10),
    color: colors.navText,
    [breakpoint(991)]: {
      fontSize: rem(28),
      lineHeight: rem(37),
      fontWeight: '800',
    },
  },
  relativeRow: {
    position: 'relative!important',
    paddingRight: '0!important',
    display: 'flex',
    justifyContent: 'center',
  },
  aboutImg: {
    padding: 0,
    positon: 'absolute',
    top: '-25px',
    right: '-30px',
    '& img': {
      maxWidth: '100%',
      height: rem(550),
      objectFit: 'cover',
    },
    [breakpoint(991)]: {
      marginTop: rem(21),
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        position: 'absolute',
        width: '100%',
        height: rem(364),
        objectFit: 'cover',
      },
    },
  },
};
export const useLeadsStyles = createUseStyles(styles)