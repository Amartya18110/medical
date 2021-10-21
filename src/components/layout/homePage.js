import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card/cards";
import Pagination from "@material-ui/lab/Pagination";

// import Map from './Map'

const HomePage = () => {
  const [details, setDetails] = useState([]);
  const [typeOfTreatment, setTypeOfTreatment] = useState("");
  const [location, setLocation] = useState("");
  const [numberOfItem, setNumberOfItem] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then(async (res) => {
        await setDetails([...res.data.getDetails]);
        await setNumberOfItem(res.data.number_of_item);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filter = () => {
    let query = "";
    if (location) {
      query = query + `address=${location}&`;
      setLocation("");
    }

    if (typeOfTreatment) {
      query = query + `typeOfTreatment=${typeOfTreatment}&`;
      setTypeOfTreatment("");
    }

    if (query) {
      query = "?" + query;
    }

    axios
      .get(`http://localhost:8000/get${query}`)
      .then(async (res) => {
        await setNumberOfItem(res.data.number_of_item);
        await setDetails([...res.data.getDetails]);
        console.log(res.data.getDetails);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(query);
  };

  const handlePage = (event, value) => {
    axios
      .get(`http://localhost:8000/get?page=${value}`)
      .then(async (res) => {
        await setDetails([...res.data.getDetails]);
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(details.length);

  return (
    <div>
      <div className="bodyContainer">
        <div className="sideArea">
          <form className="formClass">
            <h3>Filter</h3>
            <div className="Label">
              <div className="Label1">
                <label htmlFor="location">Location:</label>
                <br />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="selectOption"
                  name="location"
                  id="location"
                >
                  <option>Select Option</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="barasat">Barasat</option>
                  <option value="bidhan_nagar">Bidhan_nagar</option>
                  <option value="dellhi">Dellhi</option>
                </select>
              </div>

              <div className="Label2">
                <label htmlFor="typeOfTreatment">Treatment:</label>
                <br />
                <select
                  value={typeOfTreatment}
                  onChange={(e) => setTypeOfTreatment(e.target.value)}
                  className="selectOption"
                  name="typeOfTreatment"
                  id="typeOfTreatment"
                >
                  <option>Select Option</option>
                  <option value="eye">eye</option>
                  <option value="teeth">teeth</option>
                  <option value="skin">skin</option>
                  <option value="cancer">cancer</option>
                </select>
              </div>
            </div>
            <br />
            {/* <Button variant="contained" color="primary" className="SubmitColor">
        Submit
      </Button> */}
            <div className="submitClass">
              <button onClick={filter} type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mainBody">
          <div className="card_display">
            {numberOfItem !== 0 ? (
              details.map((el) => (
                <Cards
                  key={el._id}
                  img_url={el.img}
                  detailspopup={el.about}
                  hospital_name={el.hospitalName}
                  type_of_treatment={el.typeOfTreatment}
                  facilities={el.facilities}
                  time={el.openCloseTime}
                  available_doctors={el.availableDoctors}
                  address={el.address}
                  latitude={el.latitude}
                  longitude={el.longitude}
                />
              ))
            ) : (
              <div className="errormsg">
                <h2>no data found!!!!!!</h2>
              </div>
            )}
            <div className="pagination">
              {Math.floor(numberOfItem / 10) < 1 ? null : (
                <Pagination
                  count={parseInt(numberOfItem / 10) + 1}
                  onChange={handlePage}
                  size="large"
                  color="primary"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
