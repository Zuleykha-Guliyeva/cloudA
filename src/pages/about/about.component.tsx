import AboutContentComponent from 'core/shared/about-content/about-content.component';
import { useAboutStyles } from './about.style';
import AboutTrustComponent from './components/about-trust.component';
const AboutComponent = () => {
  const classes = useAboutStyles();
  return (
    <>
      <section className={classes.aboutPage}>
        <AboutContentComponent className='aboutPageAbout'>
          <></>
        </AboutContentComponent>
      </section>
      <section className={classes.trustSec}>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-md-8 text-center mb-112'>
              <p className={classes.trustSecTitle}>You can trust us</p>
              <p className={classes.trustSecDesc}>
                "AzInTelecom" LLC provides high-quality public cloud services
                for small and medium-sized enterprises in a data center that
                meets international standards and certificates in two different.{' '}
              </p>
            </div>
          </div>
          <div className='row'>
            <AboutTrustComponent className='trustCard' show={true}></AboutTrustComponent>
            <AboutTrustComponent className='advantages' show={false}></AboutTrustComponent>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
