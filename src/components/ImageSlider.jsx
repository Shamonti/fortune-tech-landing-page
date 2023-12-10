import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import FortuneLogo from '../assets/logo.png';
import CareMeLogo from '../assets/care_me_logo.png';
import ProtonLogo from '../assets/proton_technology_logo.png';

const CustomNextArrow = props => (
  <div {...props} className='custom-arrow next-arrow'>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const CustomPrevArrow = props => (
  <div {...props} className='custom-arrow prev-arrow'>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

function ImageSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={CareMeLogo} />
        </div>
        <div>
          <img src={ProtonLogo} />
        </div>
        <div>
          <img src={FortuneLogo} />
        </div>
        <div>
          <img src={CareMeLogo} />
        </div>
        <div>
          <img src={ProtonLogo} />
        </div>
        <div>
          <img src={FortuneLogo} />
        </div>
        <div>
          <img src={CareMeLogo} />
        </div>
        <div>
          <img src={ProtonLogo} />
        </div>
        <div>
          <img src={FortuneLogo} />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
