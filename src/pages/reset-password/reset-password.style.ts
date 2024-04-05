import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  resetPassDesc: {
    textAlign: 'center',
    padding: ` ${rem(26)} ${rem(20)} ${rem(54)} ${rem(20)}`,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '500',
    lineHeight: rem(24),
    color: colors.light,
  },
  formItemEmail: {},
  resetPassSection: {
    paddingBottom: rem(344),
  },
  otpEmailCodeInput: {
    '& input': {
      borderRadius: rem(41),
      padding: ` ${rem(16)} ${rem(24)}`,
    },
  },
};
export const useResetPasswordSyles = createUseStyles(styles);