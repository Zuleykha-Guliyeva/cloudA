import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  searchResultPage: { padding: `${rem(244)} ${rem(0)} ${rem(0)} ${rem(0)}` },
  searchResultBox: {
    borderRadius: rem(28),
    background: colors.light,
    padding: `${rem(24)} ${rem(20)} ${rem(154)} ${rem(24)}`,
  },
  searchResultPageTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(59),
  },
  searchFoundRow: {
    display: 'flex',
    paddingBottom: rem(24),
    marginBottom: rem(24),
    borderBottom: `${rem(1)} solid ${colors.searchResultBorder}`,
  },
  searchResultFound: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(19),
    color: colors.defaultTextColor,
    margin: `${rem(0)} ${rem(13)} ${rem(0)} ${rem(17)}`,
  },
  canPay: {
    textDecoration: 'none',
    color: colors.calcBtnBlue,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '800',
    lineHeight: rem(19),
  },
  searchResultRow: {
    paddingBottom: rem(24),
    marginBottom: rem(24),
    borderBottom: `${rem(1)} solid ${colors.searchResultBorder}`,
  },
  newsResultTitle: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '800',
    lineHeight: rem(19),
    color: colors.defaultTextColor,
    marginRight: rem(10),
  },
  newsResultDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(19),
    color: colors.defaultTextColor,
    marginTop: rem(8),
  },
};

export const useSearchResultItemStyles = createUseStyles(styles);
