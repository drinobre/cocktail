import useFetch from "../../hooks/useFetch";

export default function SurpriseMeComponent() {
  const url = "https://thecocktaildb.com/api/json/v1/1/random.php";

  const { data, error } = useFetch(url);

  if (error) {
    return <p>Error!</p>;
  }

  // Provide users a sense of status
  if (!data) {
    return <p>Loading ...</p>;
  }

  // function checkNumber(number) {
  //   const measure = data.drinks[0].strMeasure;

  //   if (data.drinks[0].strMeasure`${number}` !== "null") {
  //     return measure`${number}`;
  //   }
  // }

  return (
    <>
      <h2>Drink name: {data.drinks[0].strDrink}</h2>
      <div class="single-card">
        <div>
          <img
            class="img_size_medium"
            src={data.drinks[0].strDrinkThumb}
            alt="Cocktail"
          />
        </div>
        <div class="grid-2-container">
          <h3>Ingredients</h3>
          <ul>
            <li>
              {data.drinks[0].strMeasure1}
              {"-"}
              {data.drinks[0].strIngredient1}
            </li>
            <li>
              {data.drinks[0].strMeasure2}
              {"-"}
              {data.drinks[0].strIngredient2}
            </li>
            <li>
              {data.drinks[0].strMeasure3}
              {"-"}
              {data.drinks[0].strIngredient3}
            </li>
            <li>
              {data.drinks[0].strMeasure4}
              {"-"}
              {data.drinks[0].strIngredient4}
            </li>
            <li>
              {data.drinks[0].strMeasure5}
              {"-"}
              {data.drinks[0].strIngredient5}
            </li>
          </ul>
          <h3>How to prepare</h3>
          <p>{data.drinks[0].strInstructions}</p>
        </div>
      </div>
    </>
  );
}
