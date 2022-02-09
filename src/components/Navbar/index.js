import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div class="navbar-left">
          <Link to="/">Home</Link>
          Welcome to Drink API
        </div>
        <div class="navbar-right">
          <span>
            {" "}
            <Link to="/surprise_me">Surprise me</Link>
          </span>
          <span>
            <Link to="/search_drink">Search drink</Link>
          </span>
        </div>
      </nav>
    </>
  );
}
