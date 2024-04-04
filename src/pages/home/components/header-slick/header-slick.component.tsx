import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHeaderSlickComponent } from './header-slick.style';
import useLocalization from 'assets/lang';
const HeaderSlickComponent = () => {
    const classes = useHeaderSlickComponent();
    const translate = useLocalization();
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
        <p>{translate('AzinCloud')}</p>
      </div>
      <div>
        <p>{translate('AzinCloud')}</p>
      </div>
      <div>
        <p>{translate('AzinCloud')}</p>
      </div>
    </Slider>
  );
};

export default HeaderSlickComponent;
