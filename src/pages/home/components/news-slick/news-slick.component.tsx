import Slider from 'react-slick';
import NewsCardComponent from 'core/shared/news-card/news-card.component';
import { NewsLeft, NewsRight } from 'assets/images/icons/arrows';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNewsSlickComponent } from './news-slick.style';

import news1 from 'assets/images/statics/news/news1.png';
import news2 from 'assets/images/statics/news/news2.png';
import news3 from 'assets/images/statics/news/news3.png';

const NewsSlickComponent = () => {
  const classes = useNewsSlickComponent();
  const settings = {
    autoplay: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <div className={classes.customArrowPrev}>
        <NewsLeft />
      </div>
    ),
    nextArrow: (
      <div className={classes.customArrowNext}>
        <NewsRight />
      </div>
    ),
  };
  return (
    <Slider {...settings} className={classes.newsSlider}>
      <div className={classes.newsSlideItems}>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news1} />
        </div>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news2} />
        </div>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news3} />
        </div>
      </div>

      <div className={classes.newsSlideItems}>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news1} />
        </div>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news2} />
        </div>
        <div className={classes.newsSlideItem}>
          <NewsCardComponent img={news3} />
        </div>
      </div>
    </Slider>
  );
};

export default NewsSlickComponent;
