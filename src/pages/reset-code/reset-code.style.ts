import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  resetYourCodeSection: {
    paddingBottom: rem(322),
  },
  yourcodes: {
    '& .row .col-2': {
      paddingRight: rem(0),
    },
  },
  verify: {
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    backgroundColor: colors.calcBtnBlue,
    color: colors.light,
    borderRadius: rem(41),
    border: 'none',
    padding: `${rem(16)}  ${rem(77)}`,
    marginTop: rem(44),
  },
  yourCodeSpan: {
    color: colors.defaultTextColor,
    background: colors.light,
    borderRadius: rem(28),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: rem(70),
    marginRight: rem(16),
  },
  otpCodeDesc: {
    marginTop: rem(26),
    textAlign: 'center',
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    color: colors.light,
  },
};
export const useResetCodeStyles = createUseStyles(styles);
