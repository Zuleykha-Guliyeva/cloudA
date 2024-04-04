import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  signUpPage: {
    position: 'relative',
    background: colors.blueCounterBackground,
    borderRadius: rem(28),
    marginTop: rem(100),
    marginBottom: rem(161),
    '& .row .col-6 a': {
      color: colors.light,
      textDecoration: 'none',
    },
    '& Form Input': {
      borderRadius: rem(48),
      padding: `${rem(16)} ${rem(0)} ${rem(16)} ${rem(24)}`,
      color: `${colors.defaultTextColor}!important`,
    },
    '& Form span': {
      color: colors.light,
    },
    '& Form Button': {
      width: '100%',
      height: rem(56),
      borderRadius: rem(48),
      backgroundColor: colors.calcBtnBlue,
    },
  },
  signUpPagePadding: {
    padding: `${rem(115)} ${rem(340)} ${rem(68)} ${rem(340)}`,
  },
  activeTabs: {
    border: '1px solid #fff',
    borderRadius: rem(28),
    padding: `${rem(17)} ${rem(0)}`,
    backgroundColor: '#FFFFFF1A',
    width: '100%',
  },
  tabMenuSignUp: {
    '& span': {
      width: rem(150),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.light,
      fontFamily: fonts.font,
      fontSize: rem(20),
      fontWeight: '500',
      lineHeight: rem(22),
      marginLeft: rem(18),
    },
  },
  singUpTabs: {
    width: '100%',
    display: 'flex!important',
    justifyContent: 'center!important'
  },
  tabsItem: {
    width: '50%'
  },
  signBackImg1: {
    position: 'absolute',
    top: rem(0),
    left: rem(0),
  },
  signBackImg2: {
    position: 'absolute',
    bottom: '-27%',
    right: '-9%',
  },
  backIcon: {
    display: 'inline-flex',
    position: 'absolute',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: rem(44),
    paddingLeft: rem(44),
    zIndex: '999',
    '& span': { color: colors.light },
    '& img': { width: rem(36) },
  },
  backSpan: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    color: colors.defaultTextColor,
    marginLeft: rem(12),
  },
};
export const useSignUpStyles = createUseStyles(styles);
