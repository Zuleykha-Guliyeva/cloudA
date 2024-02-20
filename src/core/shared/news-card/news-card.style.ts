import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  newsCard: {
    padding: rem(10),
    borderRadius: rem(21),
    marginBottom: rem(32),
    background: colors.bodyColor,
    '& img': {
      width: '100%',
      borderRadius: rem(21),
      marginBottom: rem(20),
    },
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
