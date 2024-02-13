import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  modalBox: {
    padding: `${rem(12) + ' ' + rem(8) + ' ' + rem(12) + ' ' + rem(8)}`,
  },
  card: {},
  titleIcon: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: rem(20),
    '& img': {
      width: rem(60),
      height: rem(60),
    },
    '& span': {
      fontFamily: fonts.font,
      fontSize: rem(20),
      fontWeight: '500',
      lineHeight: rem(24),
      letterSpacing: rem(0),
      textAlign: 'left',
      marginLeft: rem(20),
      color: colors.modaldescription,
    },
  },
  tag: {
    display: 'flex',
    marginTop: rem(8),
    '& span': {
      borderRadius: rem(4),
      padding: `${rem(2) + ' ' + rem(4) + ' ' + rem(2) + ' ' + rem(4)}`,
      background: colors.partnersTag,
      fontFamily: fonts.font,
      fontSize: rem(8),
      fontWeight: '500',
      lineHeight: rem(10),
      letterSpacing: rem(0),
      textAlign: 'center',
      color: colors.navActiveText,
    },
  },
  description: {
    marginBottom: rem(22),
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
  },
};
export const useModalStyles = createUseStyles(styles);
