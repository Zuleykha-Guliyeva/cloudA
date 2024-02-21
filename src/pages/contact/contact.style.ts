import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
const styles = {
  contactPage: { padding: `${rem(230)} ${rem(0)} ${rem(140)} ${rem(0)}` },
  infoContactSec: { marginBottom: rem(82) },
  contactTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(38),
  },
  infoContact: {
    paddingBottom: rem(6),
    position: 'relative',
  },
  borderLine: {
    borderBottom: '1px solid #B7B7B7',
    width: '80%',
    position: 'absolute',
    left: 0,
    bottom: rem(0),
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
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
  contactSocial: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: rem(28),
    '& li a': {
      marginRight: rem(22),
    },
    '&:last-child': {
      marginRight: rem(8),
    },
  },
  contactMap: {
    '& iframe': { borderRadius: '28px!important' },
  },
  formContactSec: {},
  formContact: {
    padding: rem(44),
    borderRadius: rem(28),
    background: colors.blueCounterBackground,
    position: 'relative',
    '& Form Button': {
      width: '100%',
      height: rem(56),
      borderRadius: rem(48),
      backgroundColor: colors.calcBtnBlue,
    },
    '& Form Input,textarea': {
      padding: rem(16),
      borderRadius: rem(48),
    },
  },
  formTitle: {
    fontFamily: fonts.font,
    fontWeight: '700',
    lineHeight: rem(39),
    fontSize: rem(32),
    marginBottom: rem(44),
    color: colors.light,
  },
  emailPng: {
    position: 'absolute',
    right: rem(82),
    bottom: '50%',
    transform: 'translateY(50%)',
  },
  formBack: {
    position: 'absolute',
    right: 0,
    bottom: '50%',
    transform: 'translateY(50%)',
  },
};
export const useContactStyles = createUseStyles(styles);
