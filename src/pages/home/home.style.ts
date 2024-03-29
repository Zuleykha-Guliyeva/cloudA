import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
import partnersShadow from 'assets/images/statics/partners/partnersShadow.png';
import partnersImg from 'assets/images/statics/partners/partnersImg.png';
import homeSlideBackground from 'assets/images/statics/homeSlideBackground.png';

const styles = {
  slide: {
    backgroundImage: `url(${homeSlideBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: `${rem(190)}  ${rem(0)} ${rem(230)} ${rem(0)}`,
    '& img': {
      width: '100%',
    },
    '& p': {
      fontFamily: fonts.font,
      fontSize: rem(50),
      fontWeight: '700',
      lineHeight: rem(61),
      color: colors.light,
      paddingRight: rem(15),
    },
    '& button': {
      height: rem(1),
    },
  },
  absoluteWave: {
    maxWidth: '100%',
    position: 'absolute',
    left: 0,
    top: rem(530),
  },
  upcoming: {
    position: 'relative',
    top: rem(-70),
    '& a': {
      display: 'inline-flex',
      textDecoration: 'none',
      color: colors.calcBtnBlue,
      '& svg': {
        marginLeft: rem(10),
      },
    },
  },
  upcomingBackground: {
    borderRadius: rem(28),
    padding: `${rem(52)}  ${rem(111)} ${rem(46)} ${rem(111)}`,
    background: colors.light,
  },
  availableProduct: {
    border: 'none',
    borderRadius: rem(50),
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: rem(26),
    '& svg': {
      marginRight: rem(8),
    },
  },
  availableUpcoming: {
    border: 'none',
    borderRadius: rem(50),
    display: 'inline-flex',
    alignItems: 'center',
    '& svg': {
      marginRight: rem(8),
    },
  },
  selectedCategory: {
    backgroundColor: colors.availableBtn,
  },
  aboutSec: {
    '& .row .col-md-3:last-child $aboutItemBorder::after': {
      content: 'none',
    },
  },
  aboutItemBorder: {
    position: 'relative',
    '&::after': {
      content: '""',
      borderRight: `${rem(1)} solid ${colors.calcBtnBlue}`,
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
    },
  },
  aboutIconDesc: {
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '700',
    lineHeight: rem(10),
    color: colors.defaultTextColor,
    marginBottom: rem(10),
    marginLeft: rem(10),
  },
  clients: {
    background: colors.light,
    padding: `${rem(92)}  ${rem(0)}`,
    '& .container .row .col-md-2:last-child $clientsImg::after': {
      content: 'none',
    },
  },
  clientsTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  clientsImg: {
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      borderRight: `${rem(1)} solid ${colors.clientsBorderRight}`,
      position: 'absolute',
      top: rem(3),
      bottom: rem(3),
      right: 0,
      height: 'calc(100%-6)',
    },
  },
  trustUs: {
    padding: `${rem(92)}  ${rem(0)}`,
  },
  trustUsTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(12),
  },
  trustUsDescription: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(25),
    color: colors.defaultTextColor,
    marginTop: rem(35),
  },
  trustBox: {
    background: colors.light,
    borderRadius: rem(28),
    padding: rem(24),
    height: rem(290),
    boxShadow:
      'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
  },
  trustBoxTitle: {
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '700',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    marginLeft: rem(16),
  },
  trustBoxDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(26),
    color: colors.defaultTextColor,
    marginTop: rem(24),
  },
  blueCounter: {
    background: colors.blueCounterBackground,
    padding: `${rem(74)}  ${rem(0)} ${rem(92)} ${rem(0)}`,
    '& .container .row .col-md-3:last-child $lineRight::after': {
      content: 'none',
    },
  },
  blueCounterTitle: {
    fontFamily: fonts.fontLight,
    fontSize: rem(24),
    fontWeight: '600',
    lineHeight: rem(29),
    color: colors.light,
    marginTop: rem(35),
    marginBottom: rem(8),
  },
  blueCounterCount: {
    fontFamily: fonts.font,
    fontSize: rem(50),
    fontWeight: '900',
    lineHeight: rem(61),
    color: colors.light,
  },
  lineRight: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: rem(30),
      bottom: rem(30),
      right: 0,
      height: 'calc(100%-60)',
      borderRight: `${rem(1)} solid ${colors.light}`,
    },
  },
  partners: {
    backgroundImage: `url(${partnersImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    padding: `${rem(92)}  ${rem(0)} ${rem(62)} ${rem(0)}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  partnersTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
    marginBottom: rem(29),
  },
  partnersLogoBox: {},
  partnersAbsoluteImg: {
    position: 'absolute',
    right: 0,
    backgroundImage: `url(${partnersShadow})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  partnersImg: {
    position: 'absolute',
    right: rem(30),
    top: rem(30),
  },
  certificates: {
    padding: `${rem(62)}  ${rem(112)}`,
    '& img':{transition: 'transform .6s'},
    '& img:hover': {
      transform: 'scale(1.3)',
    },
  },
  certificatesTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(39),
    color: colors.defaultTextColor,
  },
  news: {
    padding: `${rem(78)}  ${rem(0)} ${rem(60)} ${rem(0)}`,
    background: colors.light,
  },
  newsSecTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '700',
    lineHeight: rem(40),
    color: colors.defaultTextColor,
  },
  newsMore: {
    textDecoration: 'none',
    fontFamily: fonts.font,
    fontSize: rem(18),
    fontWeight: '900',
    lineHeight: rem(22),
    color: colors.calcBtnBlue,
    marginLeft: rem(69),
  },
};

export const useHomeStyles = createUseStyles(styles);
