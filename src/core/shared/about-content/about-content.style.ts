import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
import aboutBck from 'assets/images/statics/about/aboutImg.png';

const styles = {
  homePageAbout: {
    backgroundImage: `url(${aboutBck})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    padding: `${rem(161)}  ${rem(0)} ${rem(163)} ${rem(0)}`,
  },
  aboutTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(12),
  },
  aboutDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    marginBottom: rem(22),
  },
  aboutPageAbout: {
    backgroundImage: `url(${aboutBck})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    padding: `${rem(258)}  ${rem(0)} ${rem(248)} ${rem(0)}`,
    '& $aboutTitle': {
      fontFamily: fonts.font,
      fontSize: rem(32),
      fontWeight: '700',
      lineHeight: rem(39),
      color: colors.light,
      marginBottom: rem(12),
    },
    '& $aboutDesc': {
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '400',
      lineHeight: rem(26),
      color: colors.light,
      marginBottom: rem(22),
    },
  },
};
export const useAboutContentStyle = createUseStyles(styles);
