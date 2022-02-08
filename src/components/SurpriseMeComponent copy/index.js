// PRACTING THE USE OF CardExampleCard - NOT WORKING

import useFetch from "../../hooks/useFetch";
import CardExampleCard from "../Card";

export default function SurpriseMeComponentTest() {
  const url = "https://thecocktaildb.com/api/json/v1/1/random.php";

  const { data, error } = useFetch(url);

  if (error) {
    return <p>Error!</p>;
  }

  // Provide users a sense of status
  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <CardExampleCard />
    </>
  );
}
