import { Filters } from "./components/Filters";
import { Results } from "./components/Results";
import { Search } from "./components/Search";
import { useTweetSearch } from "./utils/useTweetSearch";
import "./styles/app.scss";

import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { tweets, error, isLoading } = useTweetSearch(query, page);

  return (
    <div className="app">
      <div className="app-header">
        <h1>Tweet Feed</h1>
      </div>
      <div className="app-content">
        <div className="app-search">
          <Search
            term={query}
            onChange={(term) => {
              setQuery(term);
              setFilter("");
              setPage(1);
            }}
          />
        </div>
        <div className="app-filters">
          <Filters
            tags={getHashtags(tweets)}
            onChange={(newFilter) => setFilter(newFilter)}
          />
        </div>
        <div className="app-results">
          <Results
            tweets={tweets}
            filter={filter}
            loading={isLoading}
            error={error}
            onLoad={() => setPage(page + 1)}
          />
        </div>
      </div>
    </div>
  );
}

function getHashtags(tweets) {
  const tags = [];
  tweets.forEach((tweet) => tweet.hashtags.map((tag) => tags.push(tag)));

  return [...new Set(tags)];
}

export default App;
