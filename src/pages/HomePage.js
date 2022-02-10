import React from "react";
import SearchComponent from "../components/SearchComponent";
import { Button, Input } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <div>
        <section class="container">
          <div class="wave"></div>
          <div>
            <h1>Welcome to Drink API</h1>
            <div class="display-middle">
              <h2>
                The Drink API was created to help users to find how to prepare
                famous drinks. It's very simple to find the ingredients,
                measurements and how to prepare.
              </h2>
            </div>
            {/* <span>
              <Button class="display-button">Read more</Button>
            </span> */}
          </div>
        </section>
        <main class="background">
          <SearchComponent />
        </main>
      </div>
    </>
  );
}
