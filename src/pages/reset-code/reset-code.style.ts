import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  resetYourCodeSection: {
    paddingBottom: rem(322)
  },
  yourcodes: {
    '& .row .col-2': {
      paddingRight: rem(0),
    },
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
