import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
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
        className="justify-end flex items-center " style={{ height: "calc(100vh - 78px)" }}>
        <div className=" text-end text-neutral-content  pr-20">
          <div className="justify-start max-w-auto">
            <h1 className="mb-5 text-7xl font-bold text-orange-500">Destroy or be destroyed</h1>
            <p className="mb-5 text-xl">" Survive or perish: Battlezone Gaming demands your dominance."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
