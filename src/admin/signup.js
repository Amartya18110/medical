import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./signup.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import loginImg from "./sideimg.png";
import loginlogo from "./logo.png";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8000/admin/signup", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        alert("successfully signed-up");
        history.push("/admin/login");
      })
      .catch((err) => {
        console.log(err);
        alert("error siging you up");
      });
  };

  return (
    <>
      <div className="signupCardMain">
        <div className="signupImage">
          <img src={loginImg} alt="signupimg" />
        </div>
        <div className="signupDetailsForm">
          <div className="signupCard">
            <img className="signuplogo" src={loginlogo} alt="logosignup" />
            <br />
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="signupTextfield">
                <TextField
                  inputRef={register}
                  // inputProps={{style:{color:'white'}}}
                  //   style={{color:'black',backgroundColor:'yellow'}}
                  name="name"
                  id="name"
                  label="Name"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div className="signupTextfield">
                <TextField
                  inputRef={register}
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div className="signupTextfield">
                <TextField
                  inputRef={register}
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </div>
              <div className="signupTextfield">
                <TextField
                  inputRef={register}
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                />
              </div>

              <Button variant="contained" type="submit" color="primary">
                signup
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
