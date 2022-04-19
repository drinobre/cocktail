import React, { useState } from "react";
import SearchResults from "../SearchResultsComponent";
import { Button, Input } from "semantic-ui-react";

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
        <Input
          className="input"
          id="font"
          onChange={handleChange}
          placeholder="Search by Cocktail..."
        />
        <Button className="search" id="font" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div>
        <SearchResults id="font" input={apiSearch} />
      </div>
    </>
  );
}
