import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup"
import MentalHealthSurvey from "./components/Surveys/MentalHealthSurvey";
import PhysicalHealthSurvey from "./components/Surveys/PhysicalHealthSurvey";
import NutritionSurvey from "./components/Surveys/NutritionSurvey"
import PhysicalHealthInfo from './components/InfoPages/PhysicalHealthInfo'
import MentalHealthInfo from "./components/InfoPages/MentalHealthInfo";
import NutritionInfo from "./components/InfoPages/NutritionInfo";

function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/videos" element={<Videos />}></Route>
            <Route exact path="/videos/:type" element={<Videos />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/survey/mental" element={<MentalHealthSurvey />}></Route>
            <Route exact path="/survey/physical" element={<PhysicalHealthSurvey/>}></Route>
            <Route exact path="/survey/nutrition" element={<NutritionSurvey/>}></Route>
            <Route exact path="/physicalhealth/info" element={<PhysicalHealthInfo />}></Route>
            <Route exact path="/mentalhealth/info" element={<MentalHealthInfo />}></Route>
            <Route exact path="/nutrition/info" element={<NutritionInfo />}></Route>
          </Routes>
         
        </Router>
    </>
  );
}

export default App;
