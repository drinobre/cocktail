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
      <section class="container-multiple-cards">
        {/* map the fetch data with array name "drinks" and add the propreties name from the object */}
        {data.drinks.map(function ({
          idDrink,
          strDrink,
          strDrinkThumb,
          strInstructions,
          strAlcoholic,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        }) {
          return (
            <>
              <div class="multiple-cards">
                <CardExampleCardProps
                  key={idDrink}
                  title={strDrink}
                  image={strDrinkThumb}
                  alt="drink"
                  alcoholic={strAlcoholic}
                  measure1={strMeasure1}
                  ingredient1={strIngredient1}
                  measure2={strMeasure2}
                  ingredient2={strIngredient2}
                  measure3={strMeasure3}
                  ingredient3={strIngredient3}
                  measure4={strMeasure4}
                  ingredient4={strIngredient4}
                  measure5={strMeasure5}
                  ingredient5={strIngredient5}
                  measure6={strMeasure6}
                  ingredient6={strIngredient6}
                  measure7={strMeasure7}
                  ingredient7={strIngredient7}
                  measure8={strMeasure8}
                  ingredient8={strIngredient8}
                  measure9={strMeasure9}
                  ingredient9={strIngredient9}
                  measure10={strMeasure10}
                  ingredient10={strIngredient10}
                  instructions={strInstructions}
                />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
