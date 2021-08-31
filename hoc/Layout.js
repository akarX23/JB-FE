import React from "react";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Meta from "../Components/Meta/Meta";

const Layout = (props) => {
  return (
    <>
      <Meta title={"Just Books"} />

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
    </>
  );
};

export default Layout;
