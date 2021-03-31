import React from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";

export function Search({ term, onChange }) {
  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <input
        className="search-input"
        placeholder="Search by keyword"
        aria-label="Search tweets by keyword"
        onKeyUp={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
