import React, { Fragment, useEffect, useState } from "react";
import { openNav, scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    openNav(!isToggled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
  });

  return (
    <Fragment>
      <div className={"kura_tm_topbar"}>
        <div className="wrapper">
          <div className="topbar_inner">
            <div className="logo">
              <a href="#" style={{ textDecoration: 'none' }}>
                {dark && (
                  <h3 style={{ color: 'white' }}>umerkazi</h3>
                )}
                {!dark  && (
                  <h3>umerkazi</h3>
                )}
              </a>
            </div>
            <div className="menu">
              <div className="list">
                <ul className="anchor_nav" id="anchor_nav">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#timeline">Work Experience</a>
                  </li>
                  <li>
                    <a href="#portfolio">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="/img/hero/resume.pdf" target="blank">Resume</a>
                  </li>
                </ul>
              </div>
              <div className="trigger" onClick={() => toggleTrueFalse()}>
                <div
                  className={`hamburger hamburger--slider ${
                    isToggled ? " is-active" : ""
                  }`}
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kura_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
            <a href="#" style={{ textDecoration: 'none' }}>
                {dark && (
                  <h3 style={{ color: 'white' }}>umerkazi</h3>
                )}
                {!dark  && (
                  <h3>umerkazi</h3>
                )}
              </a>
            </div>
            <div className="trigger" onClick={toggleTrueFalse}>
              <div
                className={
                  isToggled
                    ? "hamburger hamburger--slider is-active"
                    : "hamburger hamburger--slider"
                }
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isToggled ? "dropdown active" : "dropdown"}>
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
                  <li>
                    <a href="#timeline">Work Experience</a>
                  </li>
                  <li>
                    <a href="#portfolio">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="/img/hero/resume.pdf" target="blank">Resume</a>
                  </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
