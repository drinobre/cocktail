import React from "react";
import { Card, Button } from "semantic-ui-react";
import ModalComponent from "../ModalElement";
import MyVerticallyCenteredModal from "../ModalElement";
import { useState } from "react";

// const extra = (
//   // <ModalComponent class="direction-center">Read more</ModalComponent>
// );

export default function CardExampleCardProps(drink) {
  const [modalShow, setModalShow] = useState(false);

  console.log(drink);

  return (
    <>
      <div key={drink.idDrink}>
        <Card>
          <h3>{drink.title}</h3>
          <p>{drink.alcoholic}</p>
          <img src={drink.image} alt={drink.alt} />
        </Card>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Read more
        </Button>

        <MyVerticallyCenteredModal
          title={drink.title}
          measure1={drink.measure1}
          ingredients1={drink.ingredient1}
          measure2={drink.measure2}
          ingredients2={drink.ingredient2}
          measure3={drink.measure3}
          ingredients3={drink.ingredient3}
          measure4={drink.measure4}
          ingredients4={drink.ingredient4}
          measure5={drink.measure5}
          ingredients5={drink.ingredient5}
          measure6={drink.measure6}
          ingredients6={drink.ingredient6}
          measure7={drink.measure7}
          ingredients7={drink.ingredient7}
          measure8={drink.measure8}
          ingredients8={drink.ingredient8}
          measure9={drink.measure9}
          ingredients9={drink.ingredient9}
          measure10={drink.measure10}
          ingredients10={drink.ingredient10}
          instructions={drink.instructions}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
