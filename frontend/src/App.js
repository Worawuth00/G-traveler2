import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";
import Navbar from "./components/Navbar";
import TourScreen from "./screens/TourScreen";
import BagScreen from "./screens/BagScreen";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/tour/:id" component={TourScreen}></Route>
      <Route path="/bag/:id?" component={BagScreen}></Route>
      <Route exact path="/" component={HomeScreen}></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
