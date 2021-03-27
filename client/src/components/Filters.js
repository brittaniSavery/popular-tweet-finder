import React from "react";

export function Filters() {
  return (
    <div className="filters">
      <h2>Filter by hashtag</h2>
      <div className="filters-hashtags">
        {["testA", "testB", "testC", "testD"].map((tag) => (
          <button key={tag} className="filters-hashtag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
