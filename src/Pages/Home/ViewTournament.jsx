
const ViewTournament = ({games}) => {

    const {name,game,registration_deadline,image} = games;
    // console.log(game);
    return (
        <div className="w-96 bg-transparent  border-none ">
          <div>
          <figure className="px-10 pt-6">
            <img src={image} alt="{name}" className="h-48 lg:w-80  border-8 border-stone-500" />
          </figure>
          </div>
          <div className=" items-center text-center  px-14 justify-cent">
            <h2 className="text-xl font-bold pt-2">{name}</h2>
            <p className="font-light">{game}</p>
          </div>
       </div>
    );
};

export default ViewTournament;