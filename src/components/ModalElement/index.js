// create Modal for read more
// use React build-in Modal
// display additional description about the drink - Ingredients, Instructions and Measure

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="modal-display"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{props.title}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Ingredients</h3>
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
          <h3>How to prepare</h3>
          <p>{props.instructions}</p>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
