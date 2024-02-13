import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';

const styles = {
  header: {
    width: "100%",
    background: colors.headerbackground,
  },
};

export const useHeaderStyles = createUseStyles(styles);
