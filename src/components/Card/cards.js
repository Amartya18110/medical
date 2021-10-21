import React, { useState } from "react";
import "./card.css";
import Map from "../layout/Map";
import DetailsPopup from "../detailsPopup";


const Cards = ({
  img_url,
  latitude,
  longitude,
  detailspopup,
  hospital_name,
  time,
  type_of_treatment,
   available_doctors,
  address,
}) => {
  const [btnValue, setBtnValue] = useState(false);
  const [mapbtnval, setMapbtnval] = useState(false);

  const handleMap = () => {
    setMapbtnval(true);
  };
  const handlemapClose = () => {
    setMapbtnval(false);
  };
console.log(latitude,longitude)
  const handleClick = () => {
    setBtnValue(true);
  };
  const handleClose = () => {
    setBtnValue(false);
  };
  return (
    <>
      <div className="card">
        <div className="imgdiv">
          <img
            src={img_url}
            alt="pic"
          />
        </div>
        <div className="contentdiv">
          <h3>{hospital_name}</h3>
          <div className="details">
            <div className="column2">
              {/* <p>available_doctors : {available_doctors}</p> */}
              <p>Address : {address}</p>
              <p>Contact : {}</p>
              <p>Timing : {time}</p>
            </div>
            
          </div>
          <div className="buttondiv">
            <button onClick={handleClick}>Know more</button>
            <button onClick={handleMap}>location</button>
          </div>
        </div>
      </div>
      {btnValue ? (
        <DetailsPopup
          hospital_name={hospital_name}
          detailspopup={detailspopup}
          type_of_treatment={type_of_treatment}
          available_doctors={available_doctors}
          handleClose={handleClose}
        />
      ) : null}
      <div>
      {mapbtnval ?( <Map longitude={longitude} latitude={latitude} handlemapClose={handlemapClose} /> ): null}
      </div>
    </>
  );
};

export default Cards;
