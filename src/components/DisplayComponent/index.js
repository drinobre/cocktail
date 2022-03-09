import React from "react";
import { Card, Button } from "semantic-ui-react";
import ModalComponent from "../ModalElement";
import MyVerticallyCenteredModal from "../ModalElement";
import { useState } from "react";

// const extra = (
//   // <ModalComponent class="direction-center">Read more</ModalComponent>
// );

export default function CardExampleCardProps({
  idDrink,
  measure1,
  measure2,
  measure3,
  ingredient1,
  ingredient2,
  ingredient3,
  title,
  alcoholic,
  image,
  alt,
}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div key={idDrink}>
        <h3>{title}</h3>
        <img href={image} alt={alt} />
        <p>{alcoholic}</p>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Read more
        </Button>
        <MyVerticallyCenteredModal
          measure1={measure1}
          ingredients1={ingredient1}
          measure2={measure2}
          ingredients2={ingredient2}
          measure3={measure3}
          ingredients3={ingredient3}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
