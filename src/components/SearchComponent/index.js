import { React, useState } from "react";

// Shall I change the component name to UserInput?

export default function SearchComponent({ input }) {
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
      <p>Did you search: {apiSearch}</p>
    </div>
  );
}
