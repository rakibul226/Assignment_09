

const Games = ({game}) => {
         console.log(game);
         const {name, image, release_date, developer,platforms,description,price} = game;

    return (
        <div  className="flex bg-gray-800 px-3 py-3 ">
            <div className="flex-1">
                <img src={image} className="h-60 w-10/12" alt={name} />
            </div>
            <div className="flex flex-1 text-start h-60 pl-5 py-3">
                <div className="w-full flex flex-col">
                    <div className="flex-shrink-0">
                        <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
                        <h2>Developer: {developer}</h2>
                        <p className="mt-2">Platforms: {platforms}</p>
                        <p className="text-2xl font-bold">${price}</p>
                    </div>
                    <div className="flex flex-grow justify-center ml-32 items-end">
                        <button className="bg-gray-600 py-2  px-3 rounded-sm hover:bg-gray-700 text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div> 
    );
    
};

export default Games;