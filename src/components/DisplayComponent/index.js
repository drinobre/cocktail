import React from "react";
import { Card, Button } from "semantic-ui-react";
import ExpandableCard from "../ModalElement";
import { useState } from "react";

export default function DisplayCards(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div key={props.idDrink}>
        <Card>
          <h3 id="font">{props.title}</h3>
          <p>{props.alcoholic}</p>
          <img src={props.image} alt={props.alt} />
        </Card>
        <Button
          className="read-more"
          id="font"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Read more
        </Button>

        <ExpandableCard
          title={props.title}
          measure1={props.measure1}
          ingredients1={props.ingredient1}
          measure2={props.measure2}
          ingredients2={props.ingredient2}
          measure3={props.measure3}
          ingredients3={props.ingredient3}
          measure4={props.measure4}
          ingredients4={props.ingredient4}
          measure5={props.measure5}
          ingredients5={props.ingredient5}
          measure6={props.measure6}
          ingredients6={props.ingredient6}
          measure7={props.measure7}
          ingredients7={props.ingredient7}
          measure8={props.measure8}
          ingredients8={props.ingredient8}
          measure9={props.measure9}
          ingredients9={props.ingredient9}
          measure10={props.measure10}
          ingredients10={props.ingredient10}
          instructions={props.instructions}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
