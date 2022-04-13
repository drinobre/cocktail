// use React build-in Modal
// display additional description about the drink - Measure, Ingredients and Instructions

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="modal-display"
      {...props}
      // size="lg" - sm, md and lg with default as md
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 id="font">{props.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 id="font">Ingredients</h3>
        <ul>
          <li>
            {props.measure1} {props.ingredients1}
          </li>
          <li>
            {props.measure2} {props.ingredients2}
          </li>
          <li>
            {props.measure3} {props.ingredients3}
          </li>
          <li>
            {props.measure4} {props.ingredients4}
          </li>
          <li>
            {props.measure5} {props.ingredients5}
          </li>
          <li>
            {props.measure6} {props.ingredients6}
          </li>
          <li>
            {props.measure7} {props.ingredients7}
          </li>
          <li>
            {props.measure8} {props.ingredients8}
          </li>
          <li>
            {props.measure9} {props.ingredients9}
          </li>
          <li>
            {props.measure10} {props.ingredients10}
          </li>

          <h3 id="font">How to prepare</h3>
          <p>{props.instructions}</p>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
