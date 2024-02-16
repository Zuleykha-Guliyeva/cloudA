import certificate1 from 'assets/images/statics/certificates/certificate1.png';
import certificate2 from 'assets/images/statics/certificates/certificate2.png';
import certificate3 from 'assets/images/statics/certificates/certificate3.png';
import certificate4 from 'assets/images/statics/certificates/certificate4.png';
import certificate5 from 'assets/images/statics/certificates/certificate5.png';
import certificate6 from 'assets/images/statics/certificates/certificate6.png';
import news1 from 'assets/images/statics/news/news1.png';
import news2 from 'assets/images/statics/news/news2.png';
import news3 from 'assets/images/statics/news/news3.png';
import partners1 from 'assets/images/statics/partners/partners1.png';
import partners2 from 'assets/images/statics/partners/partners2.png';
import partners3 from 'assets/images/statics/partners/partners3.png';
import partners4 from 'assets/images/statics/partners/partners4.png';
import azercell from 'assets/images/statics/clients/azercell.png';
import aztv from 'assets/images/statics/clients/aztv.png';
import ehokumet from 'assets/images/statics/clients/ehokumet.png';
import gencler from 'assets/images/statics/clients/gencler.png';
import mida from 'assets/images/statics/clients/mida.png';
import seher from 'assets/images/statics/clients/seher.png';
import {
  NewsLeft,
  NewsRight,
  SlideUp,
  SlideDown,
} from 'assets/images/icons/arrows';
import { Mission, Goals, Vision, Values } from 'assets/images/icons/trust';
import { useHomeStyles } from './home.style';
import AboutSubComponent from './components/about-sub.component';
import { Link } from 'react-router-dom';
import NewsCardCommponent from 'core/shared/news-card/news-card.component';
import {
  Government,
  OurCustom,
  OurPrj,
  OurTeam,
} from 'assets/images/icons/blue-counter';
import homeSlideBackground from 'assets/images/statics/homeSlideBackground.png';
import wave1 from 'assets/images/statics/wave1.png';
import { Button } from 'antd';
import ButtonComponent from 'core/shared/button/button.component';
import ProductCardComponent from 'core/shared/product-card/product-card.component';

const HomeComponent = () => {
  const classes = useHomeStyles();
  const iMargin = 0;
  return (
    <>
      <section className={classes.slide}>
        <img src={homeSlideBackground} alt='' />
        <img className={classes.absoluteWave} src={wave1} alt='' />
      </section>

      <section className={classes.upcoming}>
        <div className='container'>
          <div className={classes.upcomingBackground}>
            <div className='row'>
              <div className='col-6'>
                <Button>Available products</Button>
                <Button>Available products</Button>
              </div>
              <div className='col-6'></div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <ProductCardComponent />
              </div>
              <div className='col-md-4'>
                <ProductCardComponent />
              </div>
              <div className='col-md-4'>
                <ProductCardComponent />
              </div>
            </div>
            <div className='row justify-center'>
              <div className='col-12 text-center'>
                <Link to='#'>More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.about}>
        <div className='container'>
          <div className='row align-center justify-between'>
            <div className='col-md-4'></div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-12 text-left'>
                  <p className={classes.aboutTitle}>About us</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 text-left'>
                  <p className={classes.aboutDesc}>
                    "AzInTelecom" LLC provides high-quality public cloud
                    services for small and medium-sized enterprises in a data
                    center that meets international standards and certificates
                    in two different geographical areas in Azerbaijan. From
                    resource control and customization for corporate use to ease
                    of application development and maintenance, public cloud
                    services are provided over the Internet and resources are
                    shared among multiple users or tenants.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                  <AboutSubComponent />
                </div>
                <div className='col-md-3'>
                  <AboutSubComponent />
                </div>
                <div className='col-md-3'>
                  <AboutSubComponent />
                </div>
                <div className='col-md-3'>
                  <AboutSubComponent />
                </div>
              </div>
              <ButtonComponent text='Daha  çox' className='aboutBtn' />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.clients}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-44 text-center'>
              <p className={classes.clientsTitle}>Our private sector clients</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <img src={azercell} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={aztv} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={ehokumet} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={gencler} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={mida} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={seher} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.trustUs}>
        <div className='container'>
          <div className='row mb-45'>
            <div className='col-12 text-center'>
              <p className={classes.trustUsTitle}>You can trust us</p>
              <p className={classes.trustUsDescription}>
                "AzInTelecom" LLC provides high-quality public cloud services
                for small and medium-sized enterprises in a data center that
                meets international standards and certificates in two different.{' '}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <div className={classes.trustBox}>
                <div className='d-flex align-center'>
                  <Mission />
                  <span className={classes.trustBoxTitle}>Mission</span>
                </div>
                <p className={classes.trustBoxDesc}>
                  "AzInTelecom" LLC provides high-quality public cloud services
                  for small and medium-sized. "AzInTelecom" LLC provides
                  high-quality cloud services for small and medium sized.
                </p>
              </div>
            </div>
            <div className={`col-md-3 pt-${iMargin + 20}`}>
              <div className={classes.trustBox}>
                <div className='d-flex align-center'>
                  <Goals />
                  <span className={classes.trustBoxTitle}>Goals</span>
                </div>
                <p className={classes.trustBoxDesc}>
                  "AzInTelecom" LLC provides high-quality public cloud services
                  for small and medium-sized.
                </p>
              </div>
            </div>
            <div className={`col-md-3 pt-${iMargin + 40}`}>
              <div className={classes.trustBox}>
                <div className='d-flex align-center'>
                  <Vision />
                  <span className={classes.trustBoxTitle}>Vision</span>
                </div>
                <p className={classes.trustBoxDesc}>
                  "AzInTelecom" LLC provides high-quality public cloud services
                  for small and medium-sized."AzInTelecom" LLC provides
                  high-quality cloud services
                </p>
              </div>
            </div>
            <div className={`col-md-3 pt-${iMargin + 60}`}>
              <div className={classes.trustBox}>
                <div className='d-flex align-center'>
                  <Values />
                  <span className={classes.trustBoxTitle}>Values</span>
                </div>
                <p className={classes.trustBoxDesc}>
                  "AzInTelecom" LLC provides high-quality public cloud services
                  for small and medium-sized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.blueCounter}>
        <div className='container'>
          <div className='row justify-between'>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.borderRigt}>
                <OurTeam />
                <p className={classes.blueCounterTitle}>Our team</p>
                <span className={classes.blueCounterCount}>+420</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.borderRigt}>
                <OurPrj />
                <p className={classes.blueCounterTitle}>Our projects</p>
                <span className={classes.blueCounterCount}>+130</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.borderRigt}>
                <OurCustom />
                <p className={classes.blueCounterTitle}>Private customers</p>
                <span className={classes.blueCounterCount}>91</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div>
                <Government />
                <p className={classes.blueCounterTitle}>Government customers</p>
                <span className={classes.blueCounterCount}>70</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.partners}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 text-left'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <p className={classes.partnersTitle}>Our tech partners</p>
                </div>
              </div>
              <div className={classes.partnersLogoBox}>
                <div className='row align-center'>
                  <div className='col-1 p-0'>
                    <div className='mb-22'>
                      <SlideUp />
                    </div>
                    <div>
                      <SlideDown />
                    </div>
                  </div>
                  <div className='col-11'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className={classes.partnersLogoBackground}>
                          <img src={partners1} alt='' />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className={classes.partnersLogoBackground}>
                          <img src={partners2} alt='' />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className={classes.partnersLogoBackground}>
                          <img src={partners3} alt='' />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className={classes.partnersLogoBackground}>
                          <img src={partners4} alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.news}>
        <div className='container'>
          <div className='row align-center mb-44'>
            <div className='col-6'>
              <p className={classes.newsSecTitle}>News and blog</p>
            </div>
            <div className='col-6 text-right'>
              <Link to='#' className='pr-22'>
                <NewsLeft />
              </Link>
              <Link to='#'>
                <NewsRight />
              </Link>
              <Link to='#' className={classes.newsMore}>
                More
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <NewsCardCommponent img={news1} />
            </div>
            <div className='col-md-4'>
              <NewsCardCommponent img={news2} />
            </div>
            <div className='col-md-4'>
              <NewsCardCommponent img={news3} />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.certificates}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-44 text-center'>
              <p className={classes.certificatesTitle}>Certificates</p>
            </div>
          </div>
          <div className='row align-center pl-100 pr-100'>
            <div className='col-md-2 text-center'>
              <img src={certificate1} alt='' />
            </div>
            <div className='col-md-2 text-center'>
              <img src={certificate2} alt='' />
            </div>
            <div className='col-md-2 text-center'>
              <img src={certificate3} alt='' />
            </div>
            <div className='col-md-2 text-center'>
              <img src={certificate4} alt='' />
            </div>
            <div className='col-md-2 text-center'>
              <img src={certificate5} alt='' />
            </div>
            <div className='col-md-2 text-center'>
              <img src={certificate6} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
