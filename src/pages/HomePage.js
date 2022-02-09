import React from "react";
import SearchComponent from "../components/SearchComponent";
import { Header } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <div class="background">
        {/* <Header as="h1">Welcome to Drink API</Header> */}
        <main>
          <SearchComponent />
        </main>
      </div>
    </>
  );
}
