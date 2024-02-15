import {createUseStyles} from 'react-jss';

const styles = {
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
};

export const useHeaderStyles = createUseStyles(styles);
