import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  discoverSection: {
    marginTop: rem(170),
    marginBottom: rem(90),
    [breakpoint(991)]: {
      marginTop: rem(45),
      height: rem(1050),
    },
  },
  title: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(58),
    letterSpacing: rem(0),
    color: colors.navText,
    marginBottom: rem(32),
  },
  description: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(24),
  },
  visitTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '800',
    lineHeight: rem(42),
    letterSpacing: rem(0),
    color: colors.navText,
    marginBottom: rem(5),
  },
  visitDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(42),
    textDecoration: 'underline',
  },
  visitSubDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(42),
  },
  emailDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(37),
    [breakpoint(991)]: {
      marginBottom: rem(0),
    },
  },
  imagesBox: {
    position: 'relative',
  },
  img1: {
    position: 'absolute',
    top: rem(40),
    left: rem(120),
    [breakpoint(991)]: {
      left: rem(75),
      '& img': {
        width: rem(135),
        height: rem(183),
      },
    },
  },
  img2: {
    position: 'absolute',
    top: rem(116),
    right: rem(0),
    [breakpoint(991)]: {
      top: rem(86),
      '& img': {
        width: rem(135),
        height: rem(183),
      },
    },
  },
  img3: {
    position: 'absolute',
    top: rem(210),
    left: rem(0),
    [breakpoint(991)]: {
      top: rem(140),
      '& img': {
        width: rem(135),
        height: rem(183),
      },
    },
  },
  img4: {
    position: 'absolute',
    top: rem(310),
    right: rem(110),
    [breakpoint(991)]: {
      top: rem(190),
      right: rem(75),
      '& img': {
        width: rem(135),
        height: rem(183),
      },
    },
  },
  formSection: {
    background: colors.footBackground,
    padding: `${rem(120) + ' ' + rem(0)}`,
    [breakpoint(991)]: {
      padding: `${rem(32) + ' ' + rem(0)}`,
    },
  },
  formTitle: {
    fontFamily: fonts.font,
    fontSize: rem(60),
    fontWeight: '800',
    lineHeight: rem(80),
    letterSpacing: rem(0),
    color: colors.navActiveText,
    marginBottom: rem(24),
    [breakpoint(991)]: {
      fontSize: rem(28),
      fontWeight: '800',
      lineHeight: rem(40),
      marginBottom: rem(8),
    },
  },
  formDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    color: colors.navText,
    [breakpoint(991)]: {
      fontSize: rem(14),
      fontWeight: '400',
      lineHeight: rem(18),
      marginBottom: rem(20),
    },
  },
};
export const useContactStyles = createUseStyles(styles);
