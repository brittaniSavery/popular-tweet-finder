import React from "react";
import { TweetDisplay } from "./TweetDisplay";

export function Results() {
  return (
    <div className="results">
      <div className="results-tweet">
        <TweetDisplay />
      </div>
      <div className="results-tweet">
        <TweetDisplay />
      </div>
      <div className="results-tweet">
        <TweetDisplay />
      </div>
      <div className="results-tweet">
        <TweetDisplay />
      </div>
      <div className="results-tweet">
        <TweetDisplay />
      </div>
    </div>
  );
}
