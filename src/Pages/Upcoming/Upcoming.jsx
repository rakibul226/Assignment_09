const Upcoming = ({game}) => {

    const {name, image, release_date, developer, platforms, description} = game;

    const openModal = (name, description) => {
        // Set the title and description of the clicked game
        document.getElementById('my_modal_2_title').textContent = name;
        document.getElementById('my_modal_2_description').textContent = description;
        // Show the modal
        document.getElementById('my_modal_2').showModal();
    };

    return (
        <div  className="flex bg-gray-800 px-3 py-3 ">
            <div className="flex-1">
                <img src={image} className="h-60 w-10/12" alt={name} />
            </div>
            <div className="flex flex-1 text-start h-60 pl-5 py-3">
                <div className="w-full flex flex-col">
                    <div className="flex-shrink-0 text-xl font-thin">
                        <h1 className="text-5xl text-gray-300 font-bold mb-3 font-serif">{name}</h1>
                        <h2>Developer: {developer}</h2>
                        <p className=" mt-2 mb-3">Platforms: {platforms}</p>
                        <p className=" font-bold">Release on:{release_date}</p>
                    </div>
                    <div className="flex flex-grow justify-center ml-32 items-end">
                        <button className="btn" onClick={() => openModal(name, description)}>read more...</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-gray-800 text-white">
                                <h3 id="my_modal_2_title" className="font-bold text-lg"></h3>
                                <p id="my_modal_2_description" className="py-4"></p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Upcoming;
