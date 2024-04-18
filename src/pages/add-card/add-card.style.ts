import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  addCardPage: {
    padding: `${rem(251)} ${rem(0)} ${rem(222)} ${rem(24)}`,
  },
  addCardBox: {
    textAlign: 'center',
    borderRadius: rem(28),
    padding: `${rem(44)} ${rem(275)}`,
    boxShadow: '0px 4px 16px 0px #12475F12',
    backgroundColor: colors.light,
  },
  infoIcon: {
    marginBottom: rem(36),
  },
  userTitle: {
    color: colors.defaultTextColor,
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    marginBottom: rem(16),
  },
  userEmailDesc: {
    fontFamily: fonts.font,
    fontWeight: '500',
    fontSize: rem(18),
    lineHeight: rem(18),
    marginBottom: rem(68),
  },
  aboutBtn: {
    textDecoration: 'none',
    fontFamily: fonts.fontBold,
    fontSize: rem(18),
    lineHeight: rem(22),
    color: colors.light,
    backgroundColor: colors.calcBtnBlue,
    border: 'none',
    borderRadius: rem(41),
    display: 'inline-block',
    textAlign: 'center',
    padding: `${rem(16)}  ${rem(56)}`,
    marginTop: rem(48),
  },
};
export const useAddCardStyles = createUseStyles(styles);
