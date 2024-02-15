import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  iconDesc: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(10),
    color: colors.defaultTextColor,
    marginBottom: rem(10),
    marginLeft: rem(10),
  },
};

export const useAboutSubStyles = createUseStyles(styles);