import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SurpriseMePage from "../../pages/Suprise_me";

import Footer from "../Footer";
import NavBar from "../Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise_me" element={<SurpriseMePage />}></Route>
      </Routes>
      {/* <header className="App-header">Fancy having a Cocktail today?</header> */}
      <Footer copyright={"Created and designed by Adriana Nobre Lawrence"} />
    </div>
  );
}

export default App;
