import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import loginImg from "./sideimg.png";
import loginlogo from "./logo.png";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom"

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8000/admin/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        alert("successfully logged-in")
        console.log(res);
        history.push("/admin/data_entry")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="loginCardMain">
        <div className="loginImage">
          <img src={loginImg} alt="loginimg" />
        </div>
        <div className="loginDetailsForm">
          <div className="loginCard">
            <img className="loginlogo" src={loginlogo} alt="logologin" />
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="loginTextfield">
                <br />
                <TextField
                  inputRef={register}
                  name="email"
                  id="Email"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div className="loginTextfield">
                <TextField
                  inputRef={register}
                  name="password"
                  id="Password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </div>

              <Button variant="contained" type="submit" color="primary">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
