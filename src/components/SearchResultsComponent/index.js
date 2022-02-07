import useFetch from "../../hooks/useFetch";
import DisplayComponent from "../DisplayComponent";

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
      <section class="multiple-card1">
        {/* map the fetch data with array name "drinks" and add the propreties name from the object */}
        {data.drinks.map(function ({
          idDrink,
          strDrink,
          strDrinkThumb,
          strInstructions,
        }) {
          return (
            <section class="multiple-card">
              <DisplayComponent
                key={idDrink}
                title={strDrink}
                image={strDrinkThumb}
                alt="drink"
                //description={strInstructions}
              />
              {/* <button>Read more</button> */}
            </section>
          );
        })}
      </section>
    </>
  );
}
