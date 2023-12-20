import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Addstudent from "./Component/AddStudent/AddStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route exact  element={<Layout/>}> */}
        <Route index path="/dashboard" element={<DashBoard />} />
        <Route path="/addstudent" element={<Addstudent />} />
      </Routes>
      {/* </Route> */}
    </BrowserRouter>
  );
}

export default App;
