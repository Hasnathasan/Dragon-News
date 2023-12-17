import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <img className="mx-auto" src={logo} alt="" />
        <h3 className="text-2xl my-5">Journalism Without Fear or Favour</h3>
        <h4 className="text-3xl">{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
      <div className="flex items-center mx-auto p-3 bg-slate-100">
        <div>
          <button class="btn btn-error">Success</button>
        </div>
        <div>
          <Marquee speed={100} className="text-red-600 font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          
        </Navbar.Brand>
        <div className="flex md:order-2">
        <button className="btn px-8 rounded-none py-1 btn-active">Login</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg" href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="/navbars">About</Navbar.Link>
          <Navbar.Link className="text-lg" href="/navbars">Career</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
