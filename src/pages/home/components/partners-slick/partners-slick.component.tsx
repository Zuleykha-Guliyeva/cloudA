import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePartnersSlickComponent } from './partners-slick.style';
import partners1 from 'assets/images/statics/partners/partners1.png';
import partners2 from 'assets/images/statics/partners/partners2.png';
import partners3 from 'assets/images/statics/partners/partners3.png';
import partners4 from 'assets/images/statics/partners/partners4.png';

import { SlideUp, SlideDown } from 'assets/images/icons/arrows';
const PartnersSlickComponent = () => {
  const classes = usePartnersSlickComponent();
  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <div className={classes.customArrowUp}> <SlideUp /> </div>, 
    nextArrow: <div className={classes.customArrowDown}> <SlideDown /> </div>,
    dotsClass: classes.customDots,
  };

  return (
    <Slider {...settings}>
      <div className={classes.partnersSlideItem}>
        <div className={classes.partnersLogoBackground}>
          <img src={partners1} alt='' />
        </div>
        <div className={classes.partnersLogoBackground}>
          <img src={partners2} alt='' />
        </div>
      </div>
      <div className={classes.partnersSlideItem}>
        <div className={classes.partnersLogoBackground}>
          <img src={partners3} alt='' />
        </div>
        <div className={classes.partnersLogoBackground}>
          <img src={partners4} alt='' />
        </div>
      </div>
    </Slider>
  );
};

export default PartnersSlickComponent;
