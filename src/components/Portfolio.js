import React, { Fragment, useState } from "react";
import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";

const IMAGES = [
  {
    src: "https://github.com/UmerKazi/InvestorSpace",
    thumbnail: "/img/portfolio/is.jpg",
    title: "InvestorSpace",
    sub: "The future for investor meetings!",
  },
  {
    src: "https://github.com/UmerKazi/Taskit",
    thumbnail: "/img/portfolio/taskit.jpg",
    title: "Taskit",
    sub: "An IOS Task Management Solution.",
  },

  {
    src: "https://github.com/UmerKazi/NFT-Peeper",
    thumbnail: "/img/portfolio/nftpeeper.jpg",
    title: "NFT Peeper",
    sub: "An Interactive Way To 'Peep' Into ETH Wallets",
  },
  {
    src: "https://github.com/UmerKazi/SplitWash",
    thumbnail: "/img/portfolio/sw.jpg",
    title: "SplitWash",
    sub: "A Simple Car Wash Subscription Management Tool",
  },
  {
    src: "https://github.com/UmerKazi/ChatMonkey",
    thumbnail: "/img/portfolio/cm.jpg",
    title: "Chat Monkey",
    sub: "A Global Chatroom Built With Web Sockets",
  },
  {
    src: "https://github.com/UmerKazi/CLRS.io",
    thumbnail: "/img/portfolio/clrs.jpg",
    title: "CLRS.io",
    sub: "An Innovative Colour Palette Generation Tool",
  },
];

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };
  return (
    <Fragment>
      <div className="kura_tm_section" id="portfolio">
        <div className="kura_tm_portfolio">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Portfolio</span>
              <h3>A Collection Of My Personal Projects</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {IMAGES.map((image, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="list_inner">
                          <div className="image" >
                            <img src="/img/portfolio/410-460.jpg" alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(" + image.thumbnail + ")",
                              }}
                            ></div>
                            <div className="overlay"></div>
                            <img
                              className="svg"
                              src="/img/svg/right-arrow.svg"
                              alt=""
                            />
                            <div className="details">
                              <h3>{image.title}</h3>
                              <span>{image.sub}</span>
                            </div>
                          </div>
                          <a
                            className="kura_tm_full_link popup-vimeo"
                            onClick={() => window.open(image.src)}
                          ></a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLight ? (
        <LightBox
          images={IMAGES.map((img) => ({
            url: img.src,
            title: img.caption,
          }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </Fragment>
  );
};

export default Portfolio;
