import React from "react";

export function Filters({ tags, onChange }) {
  return (
    <div className="filters">
      <h2>Filter by hashtag</h2>
      <div className="filters-hashtags">
        {tags.map((tag) => (
          <button
            key={tag}
            className="filters-hashtag"
            onClick={() => onChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
