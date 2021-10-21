import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./layout.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Map({ handlemapClose, longitude, latitude }) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    height: "500px",
    width: "600px",
    pitch: 50,
  });
  useEffect(() => {
    setViewport({ latitude: latitude, longitude: longitude, zoom: 8,
    height: "500px",
    width: "600px",
    pitch: 50, });
  }, [latitude,longitude]);

  return (
    <div className="mainMap">
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1Ijoid2VibG9vcCIsImEiOiJja21pdXBrMWQwbDBtMndzMjZnZ3FicTIxIn0.sTsSShxZ2LqjqUWb_akSyw"
        }
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
      >
        <Marker longitude={longitude} latitude={latitude}>
          <div className="marker">
            {/* <span><LocationOnIcon /></span> */}
            <LocationOnIcon />
          </div>
        </Marker>
      </ReactMapGL>
      <div className="btnClose">
        <button onClick={handlemapClose}>close</button>
      </div>
    </div>
  );
}

export default Map;
