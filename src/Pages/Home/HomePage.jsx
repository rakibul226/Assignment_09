import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ViewUpComing from "./ViewUpComing";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ViewTournament from "./ViewTournament";
import ViewOurGames from "./ViewOurGames";

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

  const games = {
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



  const upcoming_field = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows:false,
  };

  return (
    <div className="bg-gray-900 pb-20">
      <Banner />

      <div className="mx-10 max-w-8xl sm:px-6 lg:px-8 mt-9 mb-20  text-center">
        <h1 className="text-6xl mb-8">Games</h1>
          <Slider {...games}>
            {upcoming.games?.map((game) => (
              <ViewOurGames game={game} key={game.key} />
            ))}
          </Slider>
      </div>

      <section className="bg-gray-950 py-10">
        <div className="text-6xl text-center"><h1>Tournament</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-60 lg2:px-80 gap-5">
          {upcoming.tournament?.map((games) => (
                  <ViewTournament games={games} key={games.id} />
                ))}
        </div>
      </section>

      <div className="mx-16 max-w-8xl sm:px-6 lg:px-8 pt-7 text-center ">
        <h1 className="text-6xl mb-8">Upcoming Games...</h1>
          <Slider {...upcoming_field}>
            {upcoming.upcoming?.map((game) => (
              <ViewUpComing game={game} key={game.key} />
            ))}
          </Slider>
      </div>


    </div>
  );
};

export default HomePage;
