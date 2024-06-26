import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
 <div>
       <div
      className=""
      style={{
        backgroundImage: "url(banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-30"> <Navbar /></div>
      
      <div
        // className="justify-end flex items-center h-screen" >
         className="justify-end flex items-center " style={{ height: "calc(100vh - 80px)" }}> 
        <div className=" text-end text-neutral-content mb-20 pr-20">
          <div className="justify-start max-w-auto">
            <h1 className="mb-5 text-7xl font-bold ">Destroy or be  <span className="text-orange-500">destroyed</span></h1>
            <p className="mb-5 text-xl">" Survive or perish: Battlezone demands your dominance."</p>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Banner;
