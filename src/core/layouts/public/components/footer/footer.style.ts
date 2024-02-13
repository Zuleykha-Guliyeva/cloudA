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
  },
  marginToprights: {
    marginTop: rem(132),
    [breakpoint(768)]: {
      marginTop: rem(49),
    },
  },
  footer08: {
    padding: 0,
    overflow: 'hidden',
    '& .footer-heading': {
      fontSize: rem(18),
      marginBottom: rem(30),
      [breakpoint(768)]: {
        '&.footer-heading-white': {
          color: colors.light,
        },
      },
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
  inputSubscribe: {
    borderRadius: rem(80),
    border: 'none',
    fontFamily: fonts.font,
    fontWeight: '400',
    fontSize: rem(14),
    lineHeight: rem(22),
    color: colors.defaultTextColor,
  },
  btnSubscribe: {
    borderRadius: rem(80),
    border: 'none',
    background: colors.calcBtnBlue,
    color: colors.light,
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    position: 'absolute',
    top: 0,
    right: 0,
  },
  footerSocial: {
    display: 'flex',
    '& li a': {
      marginRight: rem(22),
      fontSize: rem(18),
    },
  },
  footHeading: {
    fontFamily: fonts.fontBold,
    fontSize: rem(20),
    marginBottom: rem(42),
    fontWeight: '700',
    lineHeight: rem(22),
  },
  footerTxt: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
  },
  copyRight: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    lineHeight: rem(30),
    fontWeight: '400',
    [breakpoint(767.98)]: {
      fontSize: rem(17),
    },
  },
  footMenuItem: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    fontWeight: '400',
    lineHeight: rem(20),
    fontSize: rem(16),
    marginBottom: rem(18),
    color: colors.defaultTextColor,
  },
  verticalLine: {
    margin: rem(0) + ' ' + rem(10),
  },
  logoImg: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: rem(26),
    '& img': {
      display: 'block',
      width: rem(148),
      height: rem(40),
    },
  },
};

export const useFooterStyles = createUseStyles(styles);
