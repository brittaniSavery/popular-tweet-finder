import React from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";

export function Search() {
  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <input
        className="search-input"
        placeholder="Search by keyword"
        aria-label="Search tweets by keyword"
      />
    </div>
  );
}
