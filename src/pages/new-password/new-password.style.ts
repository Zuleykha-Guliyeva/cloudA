import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
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
    '& Form Form-field': {
      margin: rem(0),
    },
    '& Form Input': {
      borderRadius: rem(48),
      padding: `${rem(16)} ${rem(0)} ${rem(16)} ${rem(24)}`,
      color: colors.defaultTextColor,
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
    '& Form img': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '5%',
      cursor: 'pointer',
    },
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
  formItemPassword: {
    marginBottom: rem(16),
  },
  backIcon: {
    display: 'inline-flex',
    position: 'absolute',
    alignItems: 'center',
    left: rem(44),
    top: rem(44),
    cursor: 'pointer',
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
  newPasswordTitle: {
    borderBottom: `${rem(1)} solid ${colors.light}`,
    paddingBottom: rem(26),
    marginBottom: rem(44),
    '& p': {
      textAlign: 'center',
      fontFamily: fonts.fontBold,
      fontSize: rem(20),
      lineHeight: rem(24),
      color: colors.light,
      marginLeft: rem(12),
    },
  },
};

export const useNewPasswordStyles = createUseStyles(styles);
