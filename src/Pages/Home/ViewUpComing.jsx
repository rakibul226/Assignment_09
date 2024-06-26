import { ChevronLeft, ChevronRight } from "react-feather";



const ViewUpComing = ({game}) => {

    const {name, image, release_date, developer,platforms,description} = game;
    return (
        <div  className="flex bg-gray-700 px-3 py-3 ">
            <div className="flex-1">
                <img src={image} className="h-80 w-10/12" alt={name} />
            </div>
            <div className="flex-1 text-start  pl-5 items-center flex justify-center">
                    <div className="text-center">
                        <h1 className="text-6xl pb-9 text-gray-400 font-bold">{name}</h1>
                        <p className="text-3xl font-light"> {release_date}  </p>
                    </div>
            </div>
        </div> 
    );
};

export default ViewUpComing;
