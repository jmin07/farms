import React from "react";

import Header from "./header";
import Navbar from "./Navbar";

import './layout.css';

function Home() {
  return (
    <>
    
      <div className="main-left">
        <Navbar />
      </div>

      <div className="main-header">
        <Header />
      </div>

    </>
  );
}

export default Home;
