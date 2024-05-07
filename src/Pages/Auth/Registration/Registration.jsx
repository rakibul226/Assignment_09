import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import { IoEye,IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";

const Registration = () => {

  const [showPassField, setShowPassField] = useState(false);

  return <div  className="h-screen"
  style={{
    backgroundImage: "url(reg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
  <Navbar></Navbar>
  {/* <h2 className="text-4xl my-10 text-center font-bold">Please Register</h2> */}
  <div className="flex mt-32">
    <div className="flex-1"></div>
    <div className="flex-auto items-start">
    <form className="md:w-3/4 lg:w-3/4 mx-auto ">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassField ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            required
          />

          <span
            className="absolute top-9 text-2xl right-0 pr-3 pt-3 cursor-pointer"
            onClick={() => setShowPassField(!showPassField)}
          >
            {showPassField ? <IoEyeOffSharp /> : <IoEye />}
          </span>
          </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary text-lg text-white">Register</button>
      </div>
    </form>
    <Link to="/login">
      <p className="md:w-3/4 lg:w-3/4 mx-auto pt-1 ">
        Already have an account.?
        <span className="text-blue-500 underline hover:text-white"> Login</span>
      </p>
    </Link>
  </div>
  </div>
</div>
};

export default Registration;
