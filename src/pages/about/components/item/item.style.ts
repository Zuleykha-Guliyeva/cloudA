import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  aboutIcon: {
    padding: rem(28),
    width: rem(120),
    height: rem(120),
    background: colors.light,
    borderRadius: rem(12),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: rem(64),
      height: rem(64),
      [breakpoint(991)]: {
        width: rem(32),
        height: rem(32),
      },
    },
    [breakpoint(991)]: {
      width: rem(60),
      height: rem(60),
    },
  },

  title: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '500',
    lineHeight: rem(26),
    marginBottom: rem(12),
    [breakpoint(991)]: {
      fontSize: rem(16),
      lineHeight: rem(21),
    },
  },
  description: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    [breakpoint(991)]: {
      marginBottom: rem(32),
      fontSize: rem(14),
      lineHeight: rem(20),
    },
  },
  centralItem: {
    padding: `${rem(70) + ' ' + rem(0) + ' ' + rem(70) + ' ' + rem(80)}`,
    '& aboutIcon': {
      paddingRight: '50px!important',
    },
    [breakpoint(991)]: {
      padding: rem(0),
    },
  },
};

export const useItemStyles = createUseStyles(styles);
