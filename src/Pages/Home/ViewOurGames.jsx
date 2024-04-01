

const ViewOurGames = ({game}) => {
    const {name, image, price,platforms} = game;

    return (
        <div className="text-start">
            <div className="card gap glass">
                <figure><img src={image} className="h-60 w-full" alt="car!" /></figure>
                <div className="card-body h-52 justify-center flex flex-col">
                    <h2 className="card-title">{name}</h2>
                    <p>Platforms: {platforms}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions mt-auto justify-end">
                        <button className="btn bg-gray-600 text-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOurGames;
