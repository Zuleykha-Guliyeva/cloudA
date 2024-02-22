import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSlickComponent } from './header-slick.style';
const HeaderSlickComponent = () => {
    const classes = useSlickComponent();
  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: classes.customDots,
  };
  return (
    <Slider {...settings} className={classes.slider}>
      <div>
        <p>AzinCloud is Global CSP of GCore now.</p>
      </div>
      <div>
        <p>AzinCloud is Global CSP of GCore now.</p>
      </div>
      <div>
        <p>AzinCloud is Global CSP of GCore now.</p>
      </div>
    </Slider>
  );
};

export default HeaderSlickComponent;
