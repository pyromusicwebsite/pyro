import React from "react";

import "./assets/css/bootstrap-reboot.min.css";
import "./assets/css/bootstrap-grid.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/select2.min.css";
import "./assets/css/paymentfont.min.css";
import "./assets/css/slider-radio.css";
import "./assets/css/plyr.css";


import "./assets/css/main.css";

import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"
import SigninScreen from "./screens/SigninScreen";
import Header from "./components/Header";
import Sidebar from "./components/main/Sidebar";
import Footer from "./components/main/Footer";
import TicketModal from "./components/main/TicketModal";
import Player from "./components/main/Player";
import SignupScreen from "./screens/SignupScreen";
function App() {
  return <>
        <Header/>




<Sidebar/>

<Player/>

   <Routes>
   <Route path="/" element={<HomeScreen />} />
   <Route path="/signin" element={<SigninScreen />} />
   <Route path="/signup" element={<SignupScreen />} />
   </Routes>


   <Footer/>

<TicketModal/>
  </>;
}

export default App;
