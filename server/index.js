const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios").default;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  const q = req.query.q;
  const nextId = req.query.next;

  getTweets(q, nextId).then((data) => res.json(data));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

async function getTweets(q, nextId) {
  const params = new URLSearchParams();
  params.set("q", q);
  params.set("max_id", nextId);
  params.set("count", 5);
  params.set("result_type", "popular");

  const response = await axios.get(
    "https://api.twitter.com/1.1/search/tweets.json",
    {
      params: params,
      headers: { Authorization: `Bearer ${process.env.TWITTER_API_KEY}` },
    }
  );

  const results = {};

  const nextResults = new URLSearchParams(
    response.data.search_metadata.next_results
  );
  results.next = nextResults.get("max_id");

  const tweets = response.data.statuses.map((tweet) => ({
    text: tweet.text,
    username: tweet.user.screen_name,
    usericon: tweet.user.profile_image_url_https,
    hashtags: tweet.entities && tweet.entities.hashtags.map((tag) => tag.text),
  }));
  results.tweets = tweets;

  return results;
}
