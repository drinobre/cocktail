import useFetch from "../../hooks/useFetch";
import CardExampleCardProps from "../DisplayComponent";
import { useState } from "react";
import MyVerticallyCenteredModal from "../ModalElement";
import Button from "react-bootstrap/Button";

export default function SearchResults({ newResults, input }) {
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

  const { data, error } = useFetch(url);

  if (error) {
    return <p>Error!</p>;
  }

  // Provide users a sense of status
  if (!data) {
    return <p>Loading ...</p>;
  }

  //   console.log(data);
  //   console.log(data.drinks[0]);

  return (
    <>
      <section className="container-multiple-cards">
        {/* map the fetch data with array name "drinks" and add the propety name from the object */}

        {data.drinks.map(function (drink) {
          return (
            <>
              <div className="multiple-cards">
                <CardExampleCardProps drink={drink} />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
