// form.style.js
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formRow: {
    width: '100%',
    display: 'flex',
    marginBottom: rem(32),
    [breakpoint(991)]: {
      display: 'block',
      margin: rem(0),
    },
  },
  formField: {
    width: '100%',
    '& input': {
      width: '95%',
      border: 'none',
      color: colors.inputText,
      padding: rem(16),
      marginTop: rem(8),
    },
    '&:last-child input': {
      width: '100%',
      padding: rem(16),
      color: colors.inputText,
      border: 'none',
      marginTop: rem(8),
    },
    [breakpoint(991)]: {
      '& input': {
        width: '100%',
        marginBottom: rem(20),
      },
    },
  },
};

export const useFormStyles = createUseStyles(styles);
