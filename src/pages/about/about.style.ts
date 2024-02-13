import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  aboutImageSection: {
    marginBottom: rem(80),
    marginTop: rem(180),
    [breakpoint(991)]: {
      marginBottom: rem(70),
      marginTop: rem(100),
    },
  },
  greySection: {
    position: 'relative',
    width: '100%',
    height: rem(518),
    background: colors.greySec,
    padding: `${rem(0) + ' ' + rem(106) + ' ' + rem(0) + ' ' + rem(106)}`,
    [breakpoint(991)]: {
      height: rem(100),
      padding: rem(0),
    },
  },
  imgSection: {
    position: 'absolute',
    bottom: rem(60),
    width: '100%',
    '& img': {
      width: rem(900),
      hegth: rem(588),
      maxWidth: '100%',
    },
    [breakpoint(991)]: {
      bottom: rem(12),
      padding: `${rem(0) + ' ' + rem(12)}`,
    },
  },
  productsTitle: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(59),
    [breakpoint(991)]: {
      fontSize: rem(28),
      lineHeight: rem(37),
    },
  },
  creditStatic: {},
};

export const useAboutStyles = createUseStyles(styles);
