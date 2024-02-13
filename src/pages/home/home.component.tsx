import certificate1 from 'assets/images/statics/certificates/certificate1.png';
import certificate2 from 'assets/images/statics/certificates/certificate2.png';
import certificate3 from 'assets/images/statics/certificates/certificate3.png';
import certificate4 from 'assets/images/statics/certificates/certificate4.png';
import certificate5 from 'assets/images/statics/certificates/certificate5.png';
import certificate6 from 'assets/images/statics/certificates/certificate6.png';
import news1 from 'assets/images/statics/news/news1.png';
import news2 from 'assets/images/statics/news/news2.png';
import news3 from 'assets/images/statics/news/news3.png';

import {NewsLeft, NewsRight} from 'assets/images/icons/arrows'
import { useHomeStyles } from './home.style';
import { Link } from 'react-router-dom';
import NewsCardCommponent from 'core/shared/news-card/news-card.component';
const HomeComponent = () => {
  const classes = useHomeStyles();
  return (
    <>
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
          <div className='row'>
            <div className='col-md-2'>
              <img src={certificate1} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={certificate2} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={certificate3} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={certificate4} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={certificate5} alt='' />
            </div>
            <div className='col-md-2'>
              <img src={certificate6} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
