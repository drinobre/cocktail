import { React, useState } from "react";
import SearchResults from "../SearchResultsComponent";

export default function SearchComponent() {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
    // console.log(userInput);
  }

  const [apiSearch, setApiSearch] = useState("");

  function handleClick() {
    setApiSearch(userInput);
    // console.log(apiSearch);
  }

  return (
    <>
      <div className="search-container">
        <input
          id="font"
          onChange={handleChange}
          placeholder="Search by Cocktail..."
        />
        <button id="font" onClick={handleClick}>
          Search
        </button>
      </div>
      <div>
        <SearchResults id="font" input={apiSearch} />
      </div>
    </>
  );
}
