import certificate1 from 'assets/images/statics/certificates/certificate1.png';
import certificate2 from 'assets/images/statics/certificates/certificate2.png';
import certificate3 from 'assets/images/statics/certificates/certificate3.png';
import certificate4 from 'assets/images/statics/certificates/certificate4.png';
import certificate5 from 'assets/images/statics/certificates/certificate5.png';
import certificate6 from 'assets/images/statics/certificates/certificate6.png';
import azercell from 'assets/images/statics/clients/azercell.png';
import aztv from 'assets/images/statics/clients/aztv.png';
import ehokumet from 'assets/images/statics/clients/ehokumet.png';
import gencler from 'assets/images/statics/clients/gencler.png';
import mida from 'assets/images/statics/clients/mida.png';
import seher from 'assets/images/statics/clients/seher.png';
import { BlueArrow } from 'assets/images/icons/arrows';
import { Mission, Goals, Vision, Values } from 'assets/images/icons/trust';
import { useHomeStyles } from './home.style';
import { Link } from 'react-router-dom';
import {
  Government,
  OurCustom,
  OurPrj,
  OurTeam,
} from 'assets/images/icons/blue-counter';
import wave1 from 'assets/images/statics/wave1.png';
import { Button } from 'antd';
import ProductCardComponent from 'core/shared/product-card/product-card.component';
import { Lightning, Rocket } from 'assets/images/icons/product';
import slideImg from 'assets/images/statics/slideImg.png';
import HeaderSlickComponent from 'pages/home/components/header-slick/header-slick.component';
import AboutContentComponent from 'core/shared/about-content/about-content.component';
import AboutSubComponent from 'core/shared/about-content/component/about-sub.component';
import ButtonComponent from 'core/shared/button/button.component';
import { AboutIcon1 } from 'assets/images/icons/about';
import PartnersSlickComponent from './components/partners-slick/partners-slick.component';
import NewsSlickComponent from './components/news-slick/news-slick.component';
import { Routes } from 'router/routes';
import { useState } from 'react';

const HomeComponent = () => {
  const classes = useHomeStyles();
  const iMargin = 0;
  const products = [
    { id: 1, title: 'Network as a Service', category: 'product' },
    { id: 2, title: 'Platform as a Service', category: 'upcoming' },
    { id: 3, title: 'Software as a Service', category: 'product' },
  ];
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <>
      <section className={classes.slide}>
        <div className='container'>
          <div className='row justify-between'>
            <div className='col-md-5'>
              <HeaderSlickComponent />
            </div>
            <div className='col-md-7'>
              <img src={slideImg} alt='' />
            </div>
          </div>
        </div>
        <img className={classes.absoluteWave} src={wave1} alt='' />
      </section>

      <section className={classes.upcoming}>
        <div className='container'>
          <div className={classes.upcomingBackground}>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <Button
                    className={classes.availableProduct}
                    onClick={() => {
                      handleCategoryClick('product');
                    }}
                  >
                    <Lightning />
                    <span>Available products</span>
                  </Button>
                  <Button
                    className={classes.availableUpcoming}
                    onClick={() => {
                      handleCategoryClick('upcoming');
                    }}
                  >
                    <Rocket />
                    <span>Upcoming</span>
                  </Button>
                </div>
              </div>
              <div className='row py-27'>
                {filteredProducts.map((product) => (
                  <div key={product.id} className='col-md-4 mb-32'>
                    <ProductCardComponent title={product.title} />
                  </div>
                ))}
              </div>
              <div className='row justify-center align-center mt-27'>
                <div className='col-12 text-center'>
                  <Link to={Routes.products}>
                    More <BlueArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.aboutSec}>
        <AboutContentComponent className='homePageAbout'>
          <div className='row'>
            <div className='col-md-3'>
              <div className={classes.aboutItemBorder}>
                <AboutSubComponent className='aboutSubComponent'>
                  <div className='row'>
                    <div className='col-2'>
                      <AboutIcon1 />
                    </div>
                    <div className='col-9'>
                      <p className={classes.aboutIconDesc}>Special</p>
                      <p className={classes.aboutIconDesc}>Support</p>
                    </div>
                  </div>
                </AboutSubComponent>
              </div>
            </div>
            <div className='col-md-3'>
              <div className={classes.aboutItemBorder}>
                <AboutSubComponent className='aboutSubComponent'>
                  <div className='row'>
                    <div className='col-2'>
                      <AboutIcon1 />
                    </div>
                    <div className='col-9'>
                      <p className={classes.aboutIconDesc}>Special</p>
                      <p className={classes.aboutIconDesc}>Support</p>
                    </div>
                  </div>
                </AboutSubComponent>
              </div>
            </div>
            <div className='col-md-3'>
              <div className={classes.aboutItemBorder}>
                <AboutSubComponent className='aboutSubComponent'>
                  <div className='row'>
                    <div className='col-2'>
                      <AboutIcon1 />
                    </div>
                    <div className='col-9'>
                      <p className={classes.aboutIconDesc}>Special</p>
                      <p className={classes.aboutIconDesc}>Support</p>
                    </div>
                  </div>
                </AboutSubComponent>
              </div>
            </div>
            <div className='col-md-3'>
              <div className={classes.aboutItemBorder}>
                <AboutSubComponent className='aboutSubComponent'>
                  <div className='row'>
                    <div className='col-2'>
                      <AboutIcon1 />
                    </div>
                    <div className='col-9'>
                      <p className={classes.aboutIconDesc}>Special</p>
                      <p className={classes.aboutIconDesc}>Support</p>
                    </div>
                  </div>
                </AboutSubComponent>
              </div>
            </div>
          </div>
          <ButtonComponent
            text='Daha  çox'
            className='aboutBtn'
            url={Routes.about}
          />
        </AboutContentComponent>
      </section>

      <section className={classes.clients}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-44 text-center'>
              <p className={classes.clientsTitle}>Our private sector clients</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={azercell} alt='' />
              </div>
            </div>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={aztv} alt='' />
              </div>
            </div>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={ehokumet} alt='' />
              </div>
            </div>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={gencler} alt='' />
              </div>
            </div>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={mida} alt='' />
              </div>
            </div>
            <div className='col-md-2 p-0'>
              <div className={classes.clientsImg}>
                <img src={seher} alt='' />
              </div>
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
              <div className={classes.lineRight}>
                <OurTeam />
                <p className={classes.blueCounterTitle}>Our team</p>
                <span className={classes.blueCounterCount}>+420</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.lineRight}>
                <OurPrj />
                <p className={classes.blueCounterTitle}>Our projects</p>
                <span className={classes.blueCounterCount}>+130</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.lineRight}>
                <OurCustom />
                <p className={classes.blueCounterTitle}>Private customers</p>
                <span className={classes.blueCounterCount}>91</span>
              </div>
            </div>
            <div className='col-md-3 p-0 text-center'>
              <div className={classes.lineRight}>
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
                  <div className='col-12'>
                    <PartnersSlickComponent></PartnersSlickComponent>
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
              <Link to={Routes.news} className={classes.newsMore}>
                More
              </Link>
            </div>
          </div>
          <NewsSlickComponent />
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
