import React from "react";

import Header from "./header";
import Comment from "./comment";
import Footer from "./Bottom";

function Home() {
  return (
    <>
      <div className="main-container">
        <Header id="item-header" />
        <Comment id="item" />
      </div>

      <div className="footer-container">
        <Footer className="footer" />
      </div>
    </>
  );
}

export default Home;
