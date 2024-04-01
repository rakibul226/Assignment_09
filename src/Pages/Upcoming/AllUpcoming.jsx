import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Upcoming from "./Upcoming";
import React from "react";
import Slider from "react-slick";


const AllUpcoming = () => {

    const allUpcoming = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-14 py-10 gap-9 grid grid-cols-1">
                {allUpcoming.games?.map((game) => (
                        <Upcoming game={game} key={game.key} />
                      ))}
                </div>          
        </div>
    );
};

export default AllUpcoming;