import { useDispatch } from "react-redux";
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/ApiCalls";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill the fields", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
      return;
    }

    login(dispatch, { email, password })
      .then(() => {
        if (true) {
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
          });
          setTimeout(() => navigate("/dashboard"), 2000);
        } else {
          toast.error("Incorrect Email or Password", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        toast.error("Please try again later.", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginWrapper">
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>Login</h1>

          <input
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            type="email"
            placeholder="Enter Email..."
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            type="password"
            placeholder="Enter Password..."
          />

          <button
            // disabled={loading}
            onClick={loginHandler}
            className="loginBtn"
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
