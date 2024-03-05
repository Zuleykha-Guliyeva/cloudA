import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  newsCard: {
    padding: rem(10),
    borderRadius: rem(21),
    border: `${rem(1)} solid ${colors.cardBorder}`,
    marginBottom: rem(32),
    background: colors.bodyColor,
    '&:hover': {
      background: colors.light,
      border: 'none',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      '& span':{color: colors.calcBtnBlue},
    },
    '& img': {
      width: '100%',
      height: rem(246),
      borderRadius: rem(21),
      marginBottom: rem(20),
    },
    '& a': {textDecoration: 'none'}
  },
  cardBody: {
    padding: rem(12),
  },
  blogTitle: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '700',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    marginBottom: rem(10),
  },
  blogDescription: {
    fontFamily: fonts.font,
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(22),
    color: colors.defaultTextColor,
  },
  newsDate: {
    fontFamily: fonts.font,
    fontSize: rem(14),
    fontWeight: '400',
    lineHeight: rem(22),
    color: colors.newsDate,
    display: 'inline-block',
    marginTop: rem(22),
  },
};

export const useNewsCardStyles = createUseStyles(styles);
