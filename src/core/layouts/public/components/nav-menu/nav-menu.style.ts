import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  navMenu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& ul': { display: 'flex', justifyContent: 'space-end' },
    [breakpoint(768)]: {
      navMenu: {
        width: '100%',
      },
      '& ul': {
        width: '100%',
        flexDirection: 'column',
        textAlign: 'start',
        position: 'fixed',
        padding: rem(10) + ' ' + rem(25),
        top: rem(70),
        right: '-100%',
        transition: '0.3s ease-in-out',
      },
      '& ul li': {
        marginBottom: rem(10),
      },
    },
  },
  active: {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'row',
  },
  hiden: {
    left: 0,
  },

  mobileMenuIcon: {
    display: 'none',
    [breakpoint(768)]: {
      display: 'block',
      cursor: 'pointer',
      '& svg': { width: rem(30), height: rem(30) },
    },
  },
  searchIcon: {
    '& svg': {
      width: rem(24),
      height: rem(24),
      color: colors.light,
    },
  },
  calculatorBtn: {
    borderRadius: rem(41),
    padding: `${rem(16) + ' ' + rem(48)}`,
    background: colors.light,
    '& span': {
      fontFanily: fonts.font,
      fontSize: rem(18),
      fontWeight: '700',
      lineHeight: rem(22),
      color: colors.calcBtnBlue,
    },
  },
};

export const useNavMenuStyles = createUseStyles(styles);
