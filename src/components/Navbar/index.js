import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="navbar-container">
      <div class="navbar-link">
        <Link to="cocktail/">Home</Link>
      </div>
      <div class="navbar-link">
        <Link to="cocktail/surprise_me">Surprise me</Link>
      </div>
    </div>
  );
}
