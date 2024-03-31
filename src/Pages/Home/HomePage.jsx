import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ViewUpComing from "./ViewUpComing";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ViewTournament from "./ViewTournament";

const HomePage = () => {
  const upcoming = useLoaderData();
  // console.log(upcoming);

  const generateResponsiveSettings = (breakpoints) =>
  breakpoints.map(({ breakpoint, slidesToShow }) => ({
    breakpoint,
    settings: {
      slidesToShow,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  }));

// Responsive settings for the Slider component
const settings = {
  dots: false,
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
    <div className="bg-gray-900">
      <Banner />

      <div className="mx-10 max-w-8xl sm:px-6 lg:px-8 mt-9 mb-20  text-center">
        <h1 className="text-6xl mb-8">Upcoming Games...</h1>
          <Slider {...settings}>
            {upcoming.upcoming?.map((game) => (
              <ViewUpComing game={game} key={game.key} />
            ))}
          </Slider>
      </div>

      <div className="bg-gray-950 py-7">
        <div className="text-6xl text-center"><h1>Tournament</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-60 lg2:px-80">
          {upcoming.tournament?.map((games) => (
                  <ViewTournament games={games} key={games.id} />
                ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
