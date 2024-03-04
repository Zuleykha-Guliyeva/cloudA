import Slider from 'react-slick';
import NewsCardComponent from 'core/shared/news-card/news-card.component';
import { NewsLeft, NewsRight } from 'assets/images/icons/arrows';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNewsSlickComponent } from './news-slick.style';
import { useNews } from 'pages/news/actions/news.query';
const NewsSlickComponent = () => {
  const classes = useNewsSlickComponent();
  const { data } = useNews();
  const settings = {
    autoplay: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: (
      <div>
        <NewsLeft />
      </div>
    ),
    nextArrow: (
      <div>
        <NewsRight />
      </div>
    ),
  };
  return (
    <Slider {...settings} className={classes.newsSlider}>
      {data &&
        data.map((blog) => (
          <NewsCardComponent
            img={blog.urlToImage}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
    </Slider>
  );
};

export default NewsSlickComponent;
