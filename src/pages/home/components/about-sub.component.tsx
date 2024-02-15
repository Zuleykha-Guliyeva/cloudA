import { AboutIcon1 } from "assets/images/icons/about";
import { useAboutSubStyles } from "./about-sub.style";
const AboutSubComponent = () => {
    const classes = useAboutSubStyles();
    return (
      <div className='row'>
        <div className='col-2'>
          <AboutIcon1 />
        </div>
        <div className='col-9'>
          <p className={classes.iconDesc}>Special</p>
          <p className={classes.iconDesc}>Support</p>
        </div>
      </div>
    );
}
export default AboutSubComponent;