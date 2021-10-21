import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./dataEntry.css";
import { makeStyles } from "@material-ui/core";

const makeStyle = makeStyles({
  root: { paddingBottom: "15px", width: "300px" },
});

const DataEntry = () => {
  const [img, setImg] = useState("");
  // const [imgUrl, setImgUrl] = useState("");

  const styles = makeStyle();
  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    // console.log(data);

    const formImg = new FormData();
    formImg.append("file", img);
    formImg.append("upload_preset", "medical_issue");
    formImg.append("cloud_name", "doqa8hpez");

    axios
      .post("http://localhost:8000/post", data, { withCredentials: true })
      .then((res1) => {
        console.log(res1);

        axios
          .post(
            "https://api.cloudinary.com/v1_1/doqa8hpez/image/upload",
            formImg
          )
          .then(async (res2) => {
            axios
              .patch(
                `http://localhost:8000/imgupload/patch/${res1.data.postData._id}`,
                {
                  img: res2.data.url,
                },
                { withCredentials: true }
              )
              .then((res3) => {
                console.log(res3);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mainDataCard">
        <h3>Hospital Details </h3>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="dataCard">
            <div className="fstCardDiv">
              <TextField
                className={styles.root}
                inputRef={register}
                name="hospitalName"
                id="HospitalName"
                label="Hospital Name"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="typeOfTreatment"
                id="TypeOfTreatment"
                label="Type Of Treatment"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="address"
                id="Address"
                label="Address"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="availableDoctors"
                id="Available Doctors"
                label="Available Doctors"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="openCloseTime"
                id="OpenCloseTime"
                label="Open & Close Time"
                type="text"
                variant="outlined"
              />
              <br />
              <div>
                <Button>
                  <label className="inputFile" htmlFor="inputFile">
                    Upload Image
                  </label>
                  <input
                    onChange={(e) => {
                      console.log(e.target.files);
                      setImg(e.target.files[0]);
                    }}
                    id="inputFile"
                    className="fstdivInput"
                    type="file"
                  />
                </Button>
              </div>
            </div>
            <div className="sndCardiv">
              <TextField
                className={styles.root}
                inputRef={register}
                name="facilities"
                id="Facilities"
                label="Facilities"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="longitude"
                id="Longitude"
                label="Longitude"
                type="number"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="latitude"
                id="Langitude"
                label="Langitude"
                type="number"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="contactNumber"
                id="ContactNumber"
                label="Contact Number"
                type="number"
                variant="outlined"
              />
              <br />
              <TextField
                className={styles.root}
                inputRef={register}
                name="about"
                id="About"
                label="About"
                type="text"
                variant="outlined"
              />
              <br />
              <br />
              <Button variant="contained" type="submit" color="primary">
                Add New
              </Button>
            </div>
          </div>
          <div className="trdCardDiv"></div>
        </form>
      </div>
    </>
  );
};

export default DataEntry;
