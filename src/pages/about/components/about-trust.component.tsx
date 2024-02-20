import AboutSubComponent from 'core/shared/about-content/component/about-sub.component';
import { useAboutTrustStyle } from './about-trust.style';
import trust1 from 'assets/images/statics/about/trust1.png';
import trusticon1 from 'assets/images/statics/about/trusticon1.png'

const AboutTrustComponent = ({className,show}) => {
  const classes = useAboutTrustStyle();
  return (
    <div className={`${classes[className]}`}>
      {show ? (
        <div className='row align-center justify-beween'>
          <div className='col-md-6'>
            <AboutSubComponent className='trustSubComponent'>
              <div className='row align-center'>
                <img src={trusticon1} alt='' />
                <p className={classes.trustIconTitle}>Company profile</p>
                <p className={classes.trustIconDesc}>
                  Cloud Service Provider provide our customers with sustainable
                  development by applying high
                </p>
              </div>
            </AboutSubComponent>
            <AboutSubComponent className='trustSubComponent'>
              <div className='row align-center'>
                <img src={trusticon1} alt='' />
                <p className={classes.trustIconTitle}>Our Target</p>
                <p className={classes.trustIconDesc}>
                  Our goal is to provide our customers with sustainable
                  development by applying high technologies and digital
                  transformation in management. (test)
                </p>
              </div>
            </AboutSubComponent>
            <AboutSubComponent className='trustSubComponent'>
              <div className='row align-center'>
                <img src={trusticon1} alt='' />
                <p className={classes.trustIconTitle}>Special Support</p>
                <p className={classes.trustIconDesc}>
                  Startup ecosystem and education (constant participation and
                  support all startup for six months)
                </p>
              </div>
            </AboutSubComponent>
          </div>
          <div className='col-md-6'>
            <img className={classes.trustImg} src={trust1} alt='' />
          </div>
        </div>
      ) : (
        <div className='row align-center justify-beween'>
          <div className='col-md-6'>
            <img className={classes.trustImg} src={trust1} alt='' />
          </div>
          <div className='col-md-6'>
            <AboutSubComponent className='trustSubComponent'>
              <div className='row align-center'>
                <img src={trusticon1} alt='' />
                <p className={classes.trustIconTitle}>Technology Advantages</p>
                <p className={classes.trustIconDesc}>
                  Our technological solutions are more profitable than similar
                  solutions of foreign companies. As we systematically interact
                  with our clients, we create opportunities for dynamic
                  development of their business processes.
                </p>
              </div>
            </AboutSubComponent>
            <AboutSubComponent className='trustSubComponent'>
              <div className='row align-center'>
                <img src={trusticon1} alt='' />
                <p className={classes.trustIconTitle}>Special</p>
                <p className={classes.trustIconDesc}>
                  Application of modern high-tech solutions enables fully
                  effective digital control of management systems of production
                  and service facilities.
                </p>
              </div>
            </AboutSubComponent>
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutTrustComponent;
