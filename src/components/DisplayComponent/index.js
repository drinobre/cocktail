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
  measure4,
  measure5,
  measure6,
  measure7,
  measure8,
  measure9,
  measure10,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8,
  ingredient9,
  ingredient10,
  instructions,
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
          title={title}
          measure1={measure1}
          ingredients1={ingredient1}
          measure2={measure2}
          ingredients2={ingredient2}
          measure3={measure3}
          ingredients3={ingredient3}
          measure4={measure4}
          ingredients4={ingredient4}
          measure5={measure5}
          ingredients5={ingredient5}
          measure6={measure6}
          ingredients6={ingredient6}
          measure7={measure7}
          ingredients7={ingredient7}
          measure8={measure8}
          ingredients8={ingredient8}
          measure9={measure9}
          ingredients9={ingredient9}
          measure10={measure10}
          ingredients10={ingredient10}
          instructions={instructions}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
