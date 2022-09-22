import { Fragment, useEffect } from "react";
import Contact from "../src/components/Contact";
import Cursor from "../src/components/Cursor";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Timeline from "../src/components/Timeline";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";
import PageHead from "../src/PageHead";

const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <Fragment>
      <PageHead page="Home" />
      <div id="opened">
        <div className="kura_tm_all_wrap" data-color="orange">
          <Header dark />
          <Home />
          <Timeline />
          <Portfolio />
          <Contact />
          <Footer />
          <Cursor />
        </div>
      </div>
    </Fragment>
  );
};

export default IndexDark;
