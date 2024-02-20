import { createUseStyles } from 'react-jss';
import aboutBackground from 'assets/images/statics/about/aboutBackground.png'
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
const styles = {
  aboutPage: {
    backgroundImage: `url(${aboutBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  trustSec: {
    padding: `${rem(134)} 0 ${rem(200)} 0`,
  },
  trustSecTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  trustSecDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
  },
};

export const useAboutStyles = createUseStyles(styles);
