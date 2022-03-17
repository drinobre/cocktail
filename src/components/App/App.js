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
        <Route path="cocktail/" element={<HomePage />} />
        <Route path="cocktail/surprise_me" element={<SurpriseMePage />}></Route>
      </Routes>
      {/* <header className="App-header">Fancy having a Cocktail today?</header> */}
      <footer>
        <Footer copyright={"Created and designed by Adriana Nobre Lawrence"} />
      </footer>
    </div>
  );
}

// import Button from "react-bootstrap/Button";
// import React from "react";
// import MyVerticallyCenteredModal from "../ModalElement";

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default App;
