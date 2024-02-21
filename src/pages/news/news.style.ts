import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  newsSec: {
    padding: `${rem(230)} ${rem(0)} ${rem(136)} ${rem(0)}`,
    '& Form': {
      position: 'relative',
    },
    '& Form Input[type="text"]': {
      borderRadius: rem(41),
      paddingLeft: rem(62),
    },
    '& Form img': {
      position: 'absolute',
      right: 0,
    },
    '& Form svg': {
      position: 'absolute',
      left: rem(22),
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
  },
  blogsTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  pagination: {
    '& li': {
      borderRadius: `${rem(50)}!important`,
    },
    '& .ant-pagination-item-active': {
      background: colors.calcBtnBlue,
      borderColor: colors.calcBtnBlue,
      '& a': { color: colors.light },
    },
  },
};
export const useNewsStyles = createUseStyles(styles);
