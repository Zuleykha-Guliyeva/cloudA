import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  footer: {
    padding: rem(75) + ' ' + rem(0),
    backgroundColor: colors.footBackground,
    fontFamily: fonts.font,
    '& li:last-child $footMenuItem': { marginBottom: rem(0) },
    [breakpoint(768)]: {
      padding: rem(16) + ' ' + rem(0),
    },
    '& Form Input[type="submit"]': {
      width: '33%',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      border: 0,
      background: 'none',
      fontSize: rem(18),
      fontWeight: '700',
      padding: rem(0) + ' ' + rem(20),
      backgroundColor: colors.calcBtnBlue,
      color: colors.light,
      transition: '0.3s',
      borderRadius: rem(50),
      boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
    },
    '& Form Input[type="email"]': {
      borderRadius: rem(80),
      border: 'none',
      fontFamily: fonts.font,
      fontWeight: '400',
      fontSize: rem(14),
      lineHeight: rem(22),
      color: colors.defaultTextColor,
    },
  },
  footTitle: {
    fontFamily: fonts.font,
    fontWeight: '600',
    fontSize: rem(16),
    lineHeight: rem(10),
    color: colors.defaultTextColor,
    marginBottom: rem(23),
  },
  relative: {
    position: 'relative',
  },
  footerSocial: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    '& li a': {
      marginRight: rem(22),
    },
    '&:last-child': {
      marginRight: rem(8),
    },
  },
  footMenuItem: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    fontWeight: '400',
    lineHeight: rem(10),
    fontSize: rem(16),
    marginBottom: rem(22),
    color: colors.defaultTextColor,
    '&:last-child': {
      lineHeight: rem(20),
    },
  },
  verticalLine: {
    borderLeft: `${rem(1)} solid ${colors.footerVerticalLine}`,
    paddingLeft: rem(45),
  },
};

export const useFooterStyles = createUseStyles(styles);
