import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import q1 from "../../assets/qZone1.png";
import q2 from "../../assets/qZone2.png";
import q3 from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold text-slate-600">Login with</h3>
      <div className="text-center mb-4 mt-1">
        <button className="btn btn-outline btn-info  w-full mb-2">
          <FaGoogle className="mr-2"></FaGoogle> Login with Google
        </button>
        <button className="btn btn-outline hover:bg-white hover:text-black w-full">
          <FaGithub className="mr-2"></FaGithub> Login with Github
        </button>
      </div>
      <h3 className="text-xl font-bold text-slate-600">Find us on</h3>
      <div className="mb-4 mt-1">
        <button className="btn btn-ghost rounded-none w-full border border-slate-200">
          <FaFacebook className="mr-2"></FaFacebook> Facebook
        </button>
        <button className="btn btn-ghost rounded-none w-full border border-slate-200">
          <FaTwitter className="mr-2"></FaTwitter> Twitter
        </button>
        <button className="btn btn-ghost rounded-none w-full border border-slate-200">
          <FaInstagram className="mr-2"></FaInstagram> Instagram
        </button>
      </div>

      <div className="bg-slate-100 mb-4 p-4">
        <h3 className="text-xl font-bold text-slate-600">Q-zone</h3>
        <div>
          <img src={q1} alt="" />
          <img src={q2} alt="" />
          <img src={q3} alt="" />
        </div>
      </div>

      <div
        className="text-center w-full flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg})`, height: "500px" }}
      >
        <h2 className="text-2xl text-white font-semibold">
          Create an Amazing Newspaper
        </h2>
        <p className="text-lg text-white my-2">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn rounded-none bg-red-600 hover:bg-red-700 border-none w-40">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default RightNav;
