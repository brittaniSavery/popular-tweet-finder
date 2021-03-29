import "./styles/app.scss";

import { Filters } from "./components/Filters";
import { Search } from "./components/Search";
import { Results } from "./components/Results";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Tweet Feed</h1>
      </div>
      <div className="app-content">
        <div className="app-search">
          <Search />
        </div>
        <div className="app-filters">
          <Filters />
        </div>
        <div className="app-results">
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
