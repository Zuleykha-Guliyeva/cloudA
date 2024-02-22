import colors from "assets/styles/abstracts/color";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  slider: {},
  customDots: {
    display: 'flex!important',
    listStyle: 'none',
    padding: 0,
    marginTop: rem(115),
    '& button': {
      width: rem(60),
      marginRight: rem(26),
      background: colors.homeSliderDots,
      border: 'none',
      color: 'transparent',
      cursor: 'pointer',
      '&:hover, &.slick-active': {
        backgroundColor: `${colors.light} !important`,
      },
    },
  },
};

export const useSlickComponent = createUseStyles(styles);