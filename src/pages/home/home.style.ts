import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  certificates: {
    padding: `${rem(62)}  ${rem(112)}`,
  },
  certificatesTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  news: {
    padding: `${rem(78)}  ${rem(0)} ${rem(92)} ${rem(0)}`,
    background: colors.light,
  },
  newsSecTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(40),
    color: colors.defaultTextColor,
  },
  newsMore: {
    textDecoration: 'none',
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '900',
    lineHeight: rem(22),
    color: colors.calcBtnBlue,
    marginLeft: rem(69),
  },
};

export const useHomeStyles = createUseStyles(styles)
