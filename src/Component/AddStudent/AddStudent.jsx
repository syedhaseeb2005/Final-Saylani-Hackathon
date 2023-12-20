import React, { useState } from "react";
import "./Addstudent.css";
import { TextField, Container } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  storage,
} from "../../firebaseConfig/firebaseConfig.js";

const Addstudent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const addHanlder = async (e) => {
    e.preventDefault();
    if (!file) {
      return toast.error("Please select a file");
    }

    const storageRef = ref(storage, `studentImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // ... (rest of your existing state_changed logic)
      },
      (error) => {
        console.error("Error uploading file:", error);
        // ... (rest of your existing error handling logic)
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const obj = {
            firstname,
            lastname,
            course,
            password,
            email,
            phonenumber,
            studentId,
            profilePicture: downloadURL,
          };

          const res = await axios.post(
            "http://localhost:8000/api/adminAdd/addstudents/",
            obj
          );

          console.log(res.data.data);
          toast.success("Student added successfully");
          setTimeout(() => navigate("/dashboard"), 1500);
        } catch (error) {
          console.error("Error adding student:", error);
        }
      }
    );
  };

  return (
    <>
      <Container className="add-student-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={"/dashboard"}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 40,
                cursor: "pointer",
              }}
            >
              <ArrowLeft />
              Add Student
            </div>
          </Link>
          <button className="Addbtn" onClick={addHanlder}>
            Add
          </button>
        </div>
        <div className="input">
          <input
            style={{ cursor: "pointer" }}
            type="file"
            className="input_field"
            name="image"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <form className="inputItem">
          <TextField
            label="FirstName"
            name="FirstName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            label="LastName"
            name="LastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            label="Course"
            name="Course"
            variant="outlined"
            fullWidth
            margin="normal"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <TextField
            label="Password"
            name="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Email"
            name="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="PhoneNumber"
            name="PhoneNumber"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phonenumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <TextField
            label="StudentId"
            name="StudentId"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Addstudent;
