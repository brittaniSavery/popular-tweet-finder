import React from "react";
import Linkify from "linkifyjs/react";

export function TweetDisplay({ tweet }) {
  return (
    <div className="tweet">
      <img src={tweet.author.icon} alt="" className="tweet-icon" />
      <div className="tweet-body">
        <h2>{tweet.author.name}</h2>
        <Linkify
          tagName="p"
          options={{ className: "tweet-link", target: "_blank" }}
        >
          {tweet.text}
        </Linkify>
        {tweet.hashtags.map((tag) => (
          <button key={tag} className="filters-hashtag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
