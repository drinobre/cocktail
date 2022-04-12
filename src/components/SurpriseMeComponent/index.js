import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export default function SurpriseMeComponent() {
  const url = "https://thecocktaildb.com/api/json/v1/1/random.php";

  const { data, error } = useFetch(url);

  // useEffect(() => {
  //   // Provide users a sense of status
  //   if (!data) {
  //     return <p>Loading ...</p>;
  //   }
  // }, []);

  if (!data) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  // function checkNumber(number) {
  //   const measure = data.drinks[0].strMeasure;

  //   if (data.drinks[0].strMeasure`${number}` !== "null") {
  //     return measure`${number}`;
  //   }
  // }

  return (
    <div className="card-surprise-me-container">
      <div className="card-surprise-me">
        <div>
          <h1 id="font" className="paddings">
            {data.drinks[0].strDrink}
          </h1>
        </div>
        <div className="single-card">
          <div className="image-card">
            <img
              className="img_size_medium"
              src={data.drinks[0].strDrinkThumb}
              alt="Cocktail"
            />
          </div>
          <div className="description-card">
            {/* <img
              className="img_size_medium"
              src={data.drinks[0].strDrinkThumb}
              alt="Cocktail"
            /> */}
            <h4 id="font">Ingredients</h4>
            <ul>
              <li>
                {data.drinks[0].strMeasure1}
                {data.drinks[0].strIngredient1}
              </li>
              <li>
                {data.drinks[0].strMeasure2}
                {data.drinks[0].strIngredient2}
              </li>
              <li>
                {data.drinks[0].strMeasure3}
                {data.drinks[0].strIngredient3}
              </li>
              <li>
                {data.drinks[0].strMeasure4}
                {data.drinks[0].strIngredient4}
              </li>
              <li>
                {data.drinks[0].strMeasure5}
                {data.drinks[0].strIngredient5}
              </li>
              <li>
                {data.drinks[0].strMeasure6}
                {data.drinks[0].strIngredient6}
              </li>
              <li>
                {data.drinks[0].strMeasure7}
                {data.drinks[0].strIngredient7}
              </li>
              <li>
                {data.drinks[0].strMeasure8}
                {data.drinks[0].strIngredient8}
              </li>
              <li>
                {data.drinks[0].strMeasure9}
                {data.drinks[0].strIngredient9}
              </li>
              <li>
                {data.drinks[0].strMeasure10}
                {data.drinks[0].strIngredient10}
              </li>
            </ul>
            <h4 id="font">How to prepare</h4>
            <p>{data.drinks[0].strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
