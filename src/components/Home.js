import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  return (
    <div className="kura_tm_section" id="home">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <h3 className="job">Hello! <br/> I'm Umer.</h3>
              <div className="services">
                <h5 style={{ color: 'grey' }}>Currently, I am an Honours Mathematics student at the University of Waterloo. Outside of school, I am an avid photographer, a self-taught maker, and a software developer striving to make a meaningful impact on the world around me!</h5>
                {/* <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/1.jpg",
                          "Creative Designer based in Japan"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>Web Development</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/2.jpg", "Digital Marketing")
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>Digital Marketing</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/1.jpg", "Graphic Design")
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>Graphic Design</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <a href="https://www.linkedin.com/in/umerkazi/" target="blank" style={{ textDecoration: 'none'}}>
                        <h4 style={{ color: '#ff4522' }}>LinkedIn</h4>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <a href="https://github.com/UmerKazi" target="blank" style={{ textDecoration: 'none'}}>
                        <h4 style={{ color: '#ff4522' }}>Github</h4>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <a href="/img/hero/resume.pdf" target="blank" style={{ textDecoration: 'none'}}>
                        <h4 style={{ color: '#ff4522' }}>Resume</h4>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/uk-sq-col.jpg)" }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#timeline">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Home;
