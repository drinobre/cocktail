import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav class="navbar-container">
        {/* <div class="navbar-left">
          <h2>Welcome to Drink API</h2>
        </div> */}
        <div class="navbar-right">
          <span class="navbar-link">
            <Link to="/">Home</Link>
          </span>
          <span class="navbar-link">
            <Link to="/surprise_me">Surprise me</Link>
          </span>
          {/* <span class="navbar-link">
            <Link to="/search_drink">Search drink</Link>
          </span> */}
        </div>
      </nav>
    </header>
  );
}
