

const ViewUpComing = ({game}) => {
    const {name, image, release_date, developer} = game;

    return (
        <div className="text-start">
            <div className="card gap glass">
                <figure><img src={image} className="h-72 w-full" alt="car!" /></figure>
                <div className="card-body h-52 justify-center flex flex-col">
                    <h2 className="card-title">{name}</h2>
                    <p>Release On : {release_date}</p>
                    <p>Developed By: {developer}</p>
                    <div className="card-actions mt-auto justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewUpComing;
