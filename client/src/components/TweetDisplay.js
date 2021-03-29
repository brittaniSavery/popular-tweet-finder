import React from "react";

export function TweetDisplay() {
  return (
    <div className="tweet">
      <img
        src="https://via.placeholder.com/30x30.jpg"
        alt=""
        className="tweet-icon"
      />
      <div className="tweet-body">
        <h2>Username</h2>
        <p>Text Body</p>
      </div>
    </div>
  );
}
