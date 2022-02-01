import DisplayComponent from "../DisplayComponent";
import SearchComponent from "../SearchComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchComponent />
      <div class>
        <DisplayComponent title="Title" />
        <DisplayComponent title="Title1" />
        <DisplayComponent title="Title2" />
        <DisplayComponent title="Title3" />
      </div>
    </div>
  );
}

export default App;
