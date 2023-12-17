import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LeftNav from "../LeftNav/LeftNav";
import MiddleNav from "../MiddliNav/MiddleNav";
import RightNav from "../RightNav/RightNav";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-6">
          <MiddleNav></MiddleNav>
        </div>
        <div className="col-span-3">
          <RightNav></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
