import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePartnersSlickComponent } from './partners-slick.style';
import { SlideUp, SlideDown } from 'assets/images/icons/arrows';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { generateGuid } from 'core/helpers/generate-guid';
const PartnersSlickComponent = ({ partners }) => {
  const classes = usePartnersSlickComponent();
  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: (
      <div className={classes.customArrowUp}>
        {' '}
        <SlideUp />{' '}
      </div>
    ),
    nextArrow: (
      <div className={classes.customArrowDown}>
        <SlideDown />
      </div>
    ),
  };

  const  slisers = useMemo(()=>{
    return partners?.map((partner, index: number) => {
      if (partners.length - index > 3) {
        return (
          <div className={classes.partnersSlideItem} key={generateGuid()}>
            <div className={classes.partnersLogoBackground}>
              <Link to='https://www.google.com/?hl=az'>
                <img
                  src={
                    index === 0
                      ? partners[index]?.icon
                      : partners[index + 1]?.icon
                  }
                  alt=''
                />
              </Link>
            </div>
            <div className={classes.partnersLogoBackground}>
              <Link to='https://www.google.com/?hl=az'>
                <img
                  src={
                    index === 0
                      ? partners[index + 1]?.icon
                      : partners[index + 3]?.icon
                  }
                  alt=''
                />
              </Link>
            </div>
          </div>
        );
      }
    });
  }, [partners])

  return (
    <Slider {...settings} className={classes.partnersSlider}>
      {partners && slisers}
    </Slider>
  );
};

export default PartnersSlickComponent;
