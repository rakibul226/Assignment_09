import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Games from "./Games";

  

  const AllGames = () => {

    const Allgames = useLoaderData();

    return <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-24 my-14">
      {Allgames.games?.map((game) => (
              <Games game={game} key={game.key} />
            ))}
      </div>
    </div>;
  };

export default AllGames;
