import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ViewUpComing from "./ViewUpComing";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = () => {
  const upcoming = useLoaderData();

  const generateResponsiveSettings = (breakpoints) =>
  breakpoints.map(({ breakpoint, slidesToShow }) => ({
    breakpoint,
    settings: {
      slidesToShow,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    },
  }));

// Responsive settings for the Slider component
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: generateResponsiveSettings([
    { breakpoint: 425, slidesToShow: 1 },
    { breakpoint: 768, slidesToShow: 2 },
    { breakpoint: 1024, slidesToShow: 3 },
    { breakpoint: 1440, slidesToShow: 4 },
  ]),
};



  return (
    <div>
      <Banner />
      <div className="mx-10 max-w-8xl sm:px-6 lg:px-8 my-16 text-center">
        <h1 className="text-6xl mb-6">Upcoming Games...</h1>
        <Slider {...settings}>
          {upcoming?.map((game) => (
            <ViewUpComing game={game} key={game.key} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
