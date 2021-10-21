import React from "react";
import "./Footer.css";
// import ReactBreakpoints from "react-breakpoints";
import { Link } from "react-router-dom";

const Footer = () => {
  //   const breakpoints = [
  //     { width: 1, itemsToShow: 1 },
  //     { width: 550, itemsToShow: 2 },
  //     { width: 850, itemsToShow: 2 },
  //     { width: 1150, itemsToShow: 4 },
  //   ];
  return (
    <>
      <div id="footer" className="footer">
        <div className="Footer_detail">
          <div className="footer_rapper1">
            <div className="Get_started">
              <h3>Get started</h3>
              <p>Home</p>
              {/* <Link to="/Signup">
                <p>Sign up</p>
              </Link>
              <Link to="/Login">
                <p>Log in</p>
              </Link> */}
            </div>
            <div className="About_us">
              <h3>About us</h3>
              <p>Contact us</p>
              <p>Review</p>
              <Link to="/aboutus">
                <p>Team</p>
              </Link>
            </div>
          </div>
          <div className="footer_rapper2">
            <div className="Support">
              <h3>Support</h3>
              <p>FAQ</p>
              <p>Help Desk</p>
              <p>Forum</p>
            </div>
            <div className="Social">
              <h3>Follow Us</h3>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <span className="social_youtube">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Copyright">
        <p>@2021 Copyright Text</p>
      </div>
    </>
  );
};

export default Footer;
