import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { Person, AssignmentInd } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logout } from "../../Redux/ApiCalls";
import "./Sidebar.css";



const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    Logout(dispatch);
    toast.success("Logout Successful", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
    setTimeout(() => navigate("/"), 2500);
    };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="siderbarMenu">
              <h3 className="sidebarTitle">Logo</h3>
              <ul className="sidebarList">
                <Link to={'/dashboard'}>
                  <li className="sideBarListItem">
                    <Person style={{ color: "#3d7cf3" }} />
                    Student
                  </li>
                </Link>
                {/* <Link to={'/allstudent'}>
                  <li className="sideBarListItem">
                    <Person style={{ color: "#3d7cf3" }} />
                    Students
                  </li>
                </Link> */}
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/attendencesheet"}
                >
                  <li className="sideBarListItem">
                    <AssignmentInd style={{ color: "#3d7cf3" }} />
                    Attendence
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="logoutContainer" onClick={logoutHandler}>
            <h2 className="logoutText">Logout</h2>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Sidebar;
