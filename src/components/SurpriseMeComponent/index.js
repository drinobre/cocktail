import useFetch from "../../hooks/useFetch";

export default function SurpriseMeComponent() {
  const url = "https://thecocktaildb.com/api/json/v1/1/random.php";

  const { data, error } = useFetch(url);

  if (!data) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  let drink = data.drinks[0];

  return (
    <div className="card-surprise-me-container">
      <div className="card-surprise-me">
        <div>
          <h1 id="font" className="paddings">
            {drink.strDrink}
          </h1>
        </div>
        <div>
          <div className="image-card">
            <img
              className="img_size_medium"
              src={drink.strDrinkThumb}
              alt="Cocktail"
            />
          </div>
          <div className="description-card">
            <h3 id="font">Ingredients</h3>
            <ul>
              <li>
                {drink.strMeasure1}
                {drink.strIngredient1}
              </li>
              <li>
                {drink.strMeasure2}
                {drink.strIngredient2}
              </li>
              <li>
                {drink.strMeasure3}
                {drink.strIngredient3}
              </li>
              <li>
                {drink.strMeasure4}
                {drink.strIngredient4}
              </li>
              <li>
                {drink.strMeasure5}
                {drink.strIngredient5}
              </li>
              <li>
                {drink.strMeasure6}
                {drink.strIngredient6}
              </li>
              <li>
                {drink.strMeasure7}
                {drink.strIngredient7}
              </li>
              <li>
                {drink.strMeasure8}
                {drink.strIngredient8}
              </li>
              <li>
                {drink.strMeasure9}
                {drink.strIngredient9}
              </li>
              <li>
                {drink.strMeasure10}
                {drink.strIngredient10}
              </li>
            </ul>
            <h3 id="font">How to prepare</h3>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
