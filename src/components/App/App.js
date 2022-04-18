import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SurpriseMePage from "../../pages/Suprise_me";

import Footer from "../Footer";
import NavBar from "../Navbar";

function App() {
  return (
    <div className="App" id="font">
      <NavBar />
      <Routes>
        <Route path="cocktail/" element={<HomePage />} />
        <Route path="cocktail/surprise_me" element={<SurpriseMePage />}></Route>
      </Routes>
      <main></main>
      <footer>
        <Footer copyright={"Created and designed by Adriana Lawrence"} />
      </footer>
    </div>
  );
}

export default App;
