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
    <div className="search-group">
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
      <SearchResults input={apiSearch} />
    </div>
  );
}
