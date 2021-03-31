import React from "react";

export function TweetDisplay({ tweet }) {
  return (
    <div className="tweet">
      <img src={tweet.author.icon} alt="" className="tweet-icon" />
      <div className="tweet-body">
        <h2>{tweet.author.name}</h2>
        <p>{tweet.text}</p>
        {tweet.hashtags.map((tag) => (
          <button key={tag} className="filters-hashtag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
