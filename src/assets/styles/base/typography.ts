import latoBold from "../../fonts/Lato/Lato-Bold.ttf";
import latoLight from "../../fonts/Lato/Lato-Light.ttf";
import latoSemiBold from "../../fonts/Lato/Lato-Bold.ttf";
import latoRegular from "../../fonts/Lato/Lato-Regular.ttf";
import latoThin from "../../fonts/Lato/Lato-Thin.ttf";
import latoXBlack from "../../fonts/Lato/Lato-Black.ttf";
const typography = {
  '@font-face': [
    {
      fontFamily: 'Lato Bold',
      src: `url("${latoBold}")`,
    },
    {
      fontFamily: 'Lato Light',
      src: `url("${latoLight}")`,
    },
    {
      fontFamily: 'Lato Medium',
      src: `url("${latoSemiBold}")`,
    },
    {
      fontFamily: 'Lato Regular',
      src: `url("${latoRegular}")`,
    },
    {
      fontFamily: 'Lato Thin',
      src: `url("${latoThin}")`,
    },
    {
      fontFamily: 'Lato XBlack',
      src: `url("${latoXBlack}")`,
    },
  ],
};

export default typography;
