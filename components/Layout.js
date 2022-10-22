import React from "react";
import NavBar from "./NavBar";
import Notify from "./Notify";
import Modal from "./Modal";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Notify />
        <Modal />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
