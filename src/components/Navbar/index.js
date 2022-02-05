import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div class="navbar-left">
          <Link to="/">Home</Link>
        </div>
        <div class="navbar-right">
          <Link to="/surprise_me">Surprise me</Link>
          <Link to="/search_drink">Search drink</Link>
        </div>
      </nav>
    </>
  );
}
