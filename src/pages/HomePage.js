import React from "react";
import SearchComponent from "../components/SearchComponent";

export default function HomePage() {
  return (
    <>
      <section class="container">
        <div class="wave"></div>
        <div>
          <h1 id="font">Welcome to Drink API</h1>
          <div>
            <h3 id="font">
              The Drink API was created to help users to find how to prepare
              famous drinks. It's very simple to find the ingredients,
              measurements and how to prepare.
            </h3>
          </div>
        </div>
      </section>
      <main>
        <SearchComponent />
      </main>
    </>
  );
}
