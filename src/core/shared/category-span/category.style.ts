import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  category: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '800',
    lineHeight: rem(21),
    letterSpacing: rem(0),
    textAlign: 'left',
    color: colors.navActiveText,
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: rem(8),
  },
};
export const useCategoryStyles = createUseStyles(styles);
