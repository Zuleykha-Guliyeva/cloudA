import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  personal: {
    padding: `${rem(230)} ${rem(0)} ${rem(162)} ${rem(0)}`,
  },
  personalTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(80),
  },
  personalDetailBox: {
    background: colors.blueCounterBackground,
    padding: `${rem(39)} ${rem(44)} ${rem(44)} ${rem(44)}`,
    borderRadius: rem(28),
    marginBottom: rem(22),
  },
  detailTitle: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(19),
    color: colors.light,
    opacity: '80%',
    marginBottom: rem(5),
  },
  detailPersonal: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '800',
    lineHeight: rem(19),
    color: colors.light,
  },
  emailBox: {
    padding: rem(24),
    borderRadius: rem(28),
    boxShadow: '0px 4px 16px 0px #12475F12',
    marginBottom: rem(22),
  },
  emails: {
    padding: rem(24),
    boxShadow: '0px 4px 16px 0px #12475F12',
    borderRadius: rem(28),
  },
  emailTitle: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.calcBtnBlue,
    marginBottom: rem(6),
  },
  email: {
    fontFamily: fonts.font,
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(18),
    color: colors.defaultTextColor,
  },
  addEmail: {
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(14)} ${rem(0)}`,
    '& img': { cursor: 'pointer' },
  },
  emailIcon: {
    marginRight: rem(8),
  },
  passwordChangeBox: {
    padding: rem(24),
    borderRadius: rem(28),
    boxShadow: '0px 4px 16px 0px #12475F12',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      fontFamily: fonts.font,
      fontSize: rem(18),
      fontWeight: '700',
      lineHeight: rem(22),
      color: colors.defaultTextColor,
      marginRight: rem(16),
    },
    '& img': { cursor: 'pointer' },
  },
  disableAddEmail: {
    width: '50%',
    background: colors.emailAddInput,
    padding: `${rem(16)} ${rem(24)}`,
    marginTop: rem(22),
    borderRadius: rem(28),
  },
  disableAdd: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
        marginLeft: rem(8),
    }
  }
};
export const usePersonalStyles = createUseStyles(styles);
