import { useLoaderData } from "react-router-dom"; 

import Navbar from "../Home/Navbar/Navbar";

const Upcoming = () => {

    // const games = useLoaderData();
    // console.log(games);
  


  return(
    <div>
      <Navbar></Navbar>
      {/* {games.map((game)=>(
        <Games game={game} ></Games>
      ))} */}
    </div>
  )
};

export default Upcoming;
