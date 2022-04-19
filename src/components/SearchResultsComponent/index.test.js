// create a unit test
// NOT WORKING

import useFetch from "../../hooks/useFetch.js";

describe("custom Hook", () => {
  let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const { data, error } = useFetch(url);

  let drinkId = data.drinks[0].idDrink;

  test("find the id for the first result of margarita", () => {
    const actual = drinkId;
    const expected = 11007;
    expect(actual).toStrictEqual(expected);
  });
});
