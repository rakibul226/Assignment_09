import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Upcoming from "./Upcoming";
import React from "react";
import Slider from "react-slick";


const AllUpcoming = () => {

    const allUpcoming = useLoaderData();

    return (
        <div className="bg-gray-900">
            <Navbar></Navbar>
            <div className="mx-24 py-10 gap-9 grid grid-cols-1">
                {allUpcoming.games?.map((game) => (
                        <Upcoming game={game} key={game.key} />
                      ))}
                </div>          
        </div>
    );
};

export default AllUpcoming;