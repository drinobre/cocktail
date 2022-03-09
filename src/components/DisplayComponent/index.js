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
  strDrink,
  strDrinkThumb,
  strInstructions,
  strAlcoholic,
  strIngredient1,
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
          ingredients1={strIngredient1}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
