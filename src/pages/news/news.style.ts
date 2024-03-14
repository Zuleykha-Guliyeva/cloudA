import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  newsSec: {
    padding: `${rem(230)} ${rem(0)} ${rem(136)} ${rem(0)}`,
    '& Form .form-item': { marginBottom: '0!important' },
    '& Form Input[type="text"]': {
      borderRadius: rem(41),
      paddingLeft: rem(62),
    },
    '& Form Input[type="date"]': {
      fontFamily: fonts.font,
      fontSize: rem(14),
      fontWeight: '400',
      lineHeight: rem(22),
      color: colors.defaultTextColor,
      borderRadius: rem(41),
      padding: `${rem(16)} ${rem(16)} ${rem(16)} ${rem(24)}`,
    },
    '& Form Input[type="submit"]': {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: fonts.font,
      fontSize: rem(15),
      fontWeight: '900',
      lineHeight: rem(24),
      color: colors.light,
      borderRadius: rem(41),
      width: rem(143),
      marginLeft: rem(12),
      background: colors.calcBtnBlue,
    },
    '& Form Input[type="reset"]': {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: fonts.font,
      fontSize: rem(15),
      fontWeight: '900',
      lineHeight: rem(24),
      color: colors.defaultTextColor,
      borderRadius: rem(41),
      width: rem(143),
    },
    '& Form img': {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    '& Form svg': {
      position: 'absolute',
      left: rem(22),
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
  },
  relativeBox: {
    position: 'relative',
    display: 'flex-block',
    alignItems: 'center',
  },
  searchForm: {
    position: 'relative',
    '& img': {
      cursor: 'pointer',
    },
  },
  inputSubmitGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  blogsTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  searchForDate: {
    display: 'block',
    position: 'absolute',
    top: '100%',
    right: 0,
    left: 0,
    background: colors.light,
    borderRadius: rem(28),
    marginTop: rem(12),
    padding: `${rem(12)} ${rem(0)} ${rem(26)} ${rem(0)}`,
  },
  searchDateNone: {
    display: 'none',
  },
  inputDateGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: rem(26),
  },
  fromDate: {
    display: 'inline-block',
    marginRight: rem(22),
  },
  toDate: {},
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
