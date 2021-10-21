import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
// import image1 from "../img/home1.jpg";
// import image2 from "../img/home2.jpg";
// import image3 from "../img/home3.jpg";
import "./home.css";

const Carousel_design = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: -60 },
    to: { x: 0 },
    config: { duration: 2000 },
    // from: { y: 0 },
    // to: { y: 100 },
  });

  return (
    <div className="Content">
      {/* <div className="Content_carousel">
        <Carousel
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          transitionTime={800}
        >
          <div className="carousel_img">
            <img src={image1} alt="logo" />
          </div>
          <div className="carousel_img">
            <img src={image2} alt="logo" />
          </div>
          <div className="carousel_img">
            <img src={image3} alt="logo" />
          </div>
        </Carousel> */}
      {/* </div> */}
      <div className="Bg_text">
        <div className="Maintext">
          <div className="text">
            <animated.div
              style={{
                ...styles,
              }}
            >
              <p>
                <i className="fas fa-heartbeat"></i>
              </p>
            </animated.div>
            <h2>Want to Know</h2>
            <h2>About Hospitals & Treatments</h2>
          </div>
          <div className="carousel_button">
            <Link to="/homePage">
              <p>Click Here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel_design;
