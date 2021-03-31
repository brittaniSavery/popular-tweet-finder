import React from "react";
import { TweetDisplay } from "./TweetDisplay";

export function Results({ tweets, filter, loading, error, onLoad }) {
  const filteredTweets = filter
    ? tweets.filter((tweet) => tweet.hashtags.includes(filter))
    : tweets;

  return (
    <div className="results">
      {filteredTweets.map((tweet) => (
        <div className="results-tweet">
          <TweetDisplay tweet={tweet} />
        </div>
      ))}

      <button className="load-more" onClick={onLoad}>
        Load More
      </button>
    </div>
  );
}
