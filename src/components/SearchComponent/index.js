import { React, useState } from "react";
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
      <div className="search-group">
        <Input onChange={handleChange} placeholder="Search..." />
        {/* <input onChange={handleChange}></input> */}
        <Button onClick={handleClick}>Search</Button>
        {/* <button onClick={handleClick}>Search</button> */}
      </div>
      <div>
        <SearchResults input={apiSearch} />
      </div>
    </>
  );
}
