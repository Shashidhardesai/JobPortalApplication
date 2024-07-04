import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import FrontPage from "./FrontPage";
import FindJobs from "./FindJobs";
import Navbar from "./Navbar";
import About from "./About";

import MIddlePage from "./MIddlePage";
import HrLogin from "./Hrpage/HrLogin";
import HrPage from "./Hrpage/HrPage";
import PostJobs from "./Hrpage/PostJobs";
import Postedjobs from "./Hrpage/Postedjobs";
import UploadResume from "./Hrpage/UploadResume";
import AdminPage from "./Adminpage/AdminPage";
import AdminLogin from "./Adminpage/AdminLogin";



function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/middlepage" element={<MIddlePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/frontpage" element={<FrontPage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} />
          
          <Route path="/HrLogin" element={<HrLogin />} />
          <Route path="/Hrpage" element={<HrPage />} />
          <Route path="/postjobs" element={<PostJobs />} />
          <Route path="/postedjobs" element={<Postedjobs />} />
          <Route path="/uploadresume" element={<UploadResume/>} />
          <Route path="/adminpage" element={<AdminPage/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
