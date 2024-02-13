// iimport { useAboutStyles } from './about.style';
import { useAbout } from './actions/about.query';
const AboutComponent = () => {
  // const classes = useAboutStyles();
  const { data } = useAbout();
  const creditAbout = data;
  console.log(creditAbout);

  return (
    <></>
  );
};

export default AboutComponent;
