import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  signInPage: {
    position: 'relative',
    background: colors.blueCounterBackground,
    borderRadius: rem(28),
    marginTop: rem(100),
    marginBottom: rem(161),
    padding: `${rem(115)} ${rem(342)} ${rem(384)} ${rem(338)}`,
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
  tabMenuSignIn: {
    borderBottom: `${rem(1)} solid ${colors.light}`,
    paddingBottom: rem(26),
    marginBottom: rem(44),
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

  }
};

export const useSignInStyles = createUseStyles(styles);
