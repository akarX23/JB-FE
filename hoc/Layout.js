import React from "react";
import Head from "next/head";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = (props) => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      >
        <Header />
        {props.children}
        <div style={{ flex: 1 }}></div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
