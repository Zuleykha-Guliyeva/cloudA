import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  agree: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(25),
    textAlign: 'left',
    color: colors.agreeGrey,
  },
  agreeBlue: {
    color: colors.agreeBlue,
    marginRight: rem(10),
  },
  inputLabel: {
    fontSize: rem(16),
    fontWeight: '500',
    lineHeight: rem(20),
    display: 'inline-block',
    marginBottom: rem(8),
  },
  input: {
    padding: rem(16),
    height: rem(51),
    width: '100%',
    border: `1px solid ${colors.inputborder}`,
    borderRadius: rem(4),
    gap: rem(2),
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(20),
    [breakpoint(991)]: {},
  },
  inputLabelMonth: {
    fontSize: rem(12),
    fontWeight: '400',
    lineHeight: rem(14),
    display: 'inline-block',
    marginBottom: rem(6),
  },
  inputLabelFin: {
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(14),
    display: 'inline-block',
    marginBottom: rem(8),
  },
  greenTxt: {
    color: colors.navActiveText,
    fontSize: rem(18),
    fontWeight: '500',
    lineHeight: rem(22),
  },
  paddingL15: {
    [breakpoint(991)]: {
      paddingLeft: rem(15),
      marginBottom: rem(30),
    },
  },
  marginT20: {
    marginTop: `${rem(20)}!important`,
  },
};
export const useLoanClaculatorStyles = createUseStyles(styles);
