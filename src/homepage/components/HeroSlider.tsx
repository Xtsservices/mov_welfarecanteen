import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import slide1 from "../images/Slide2.png";
import slide2 from "../images/Slide2.png";
import slide3 from "../images/Slide3.png";

// Styled-components
const Slide = styled.div`
  height: 90vh;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6); /* dark overlay */
    z-index: 2;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: white;
  max-width: 700px;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  button {
    background-color: #dc2626;
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b91c1c;
    }
  }
`;

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      image: slide1,
      title: "Welcome to the Welfare Canteen",
      text: "Delicious, Healthy, Professional Canteen Services",
    },
    {
      image: slide2,
      title: "Quality You Can Taste",
      text: "From corporate to institutional Canteen - we serve excellence.",
    },
    {
      image: slide3,
      title: "Fresh & Hygienic",
      text: "Clean kitchens, healthy food, happy customers.",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, idx) => (
        <Slide key={idx}>
          <img src={slide.image} alt={slide.title} />
          <SlideContent>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            {/* <button>Explore View More</button> */}
          </SlideContent>
        </Slide>
      ))}
    </Slider>
  );
};

export default HeroSlider;
