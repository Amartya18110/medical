import React from "react";

const AboutUsCard = ({src, alt}) => {
  
  return (
    <>
      <div className="aboutusmain">
        <div className="firstimg">
          <img src={src} alt={alt} />
        </div>
        <div className="firstdetails">
          <h3>Name:</h3>
          <p>Designation:</p>
        </div>
      </div>
    </>
  );
};
export default AboutUsCard;
