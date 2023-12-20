import axios from "axios";
import React, { useEffect , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddCircleRounded, Person } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import './Home.css'

const columns = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "ProfilePic",
    headerName: "Profile Pic",
    width: 190,
    renderCell: (params) => (
      <img
        src={params.row.ProfilePic}
        alt="Profile Pic"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
    ),
  },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "Course", headerName: "Course", width: 150 },
  { field: "Password", headerName: "Password", width: 130, type: Number },
];

const Home = () => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/adminAdd/");
        const filterData = res.data.data.map((item) => {
          return {
            id: item._id,
            email: item.email,
            ProfilePic: item.profilePicture,
            Name: `${item.firstname} ${item.lastname}`,
            Course: item.course,
            Password: item.password,
          };
        });
        setRow(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getStudents();
  }, []);
  return (
    <div>
      <div className="center">
        <div className="centerWrapper">
          <div className="center_top">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Person
                style={{
                  backgroundColor: "#5C93FA",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "5px",
                  fontSize: "30px",
                }}
              />
              <span style={{ fontSize: "25px" }}>Students</span>
            </div>
            <Link
              to={"/addstudent"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="addStudent">
                <AddCircleRounded style={{ fontSize: "25px" }} />
                <span style={{ fontSize: "20px" }}>Add Student</span>
              </button>
            </Link>
          </div>

          <div style={{ height: 400, width: "100%", marginTop: "30px" }}>
            <DataGrid
              rows={row}
              columns={columns}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
