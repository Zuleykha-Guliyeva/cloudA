import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  item: {
    marginRight: rem(32),
    '&:last-child': { marginRight: rem(0) },
  },
  itemText: {
    fontFanily: fonts.font,
    fontSize: rem(16),
    fontWeight: '500',
    lineHeight: rem(20),
    color: colors.light,
    '&:hover': {
    },
  },
  link: {
    textDecoration: 'none',
  },
  active: {
    '& $itemText': {
    },
  },
};

export const useNavMenuItemStyles = createUseStyles(styles);
