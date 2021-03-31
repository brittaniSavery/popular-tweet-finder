const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios").default;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  const query = req.query.query;
  const nextId = req.query.next_id;

  getTweets(query, nextId)
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

async function getTweets(query, nextId) {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("max_id", nextId);
  params.set("count", 5);
  params.set("result_type", "popular");

  try {
    const results = {};
    const response = await axios.get(
      "https://api.twitter.com/1.1/search/tweets.json",
      {
        params: params,
        headers: { Authorization: `Bearer ${process.env.TWITTER_API_KEY}` },
      }
    );

    const nextResults = new URLSearchParams(
      response.data.search_metadata.next_results
    );
    results.next_id = nextResults.get("max_id");

    const tweets = response.data.statuses.map((tweet) => ({
      text: tweet.text,
      author: {
        name: tweet.user.screen_name,
        icon: tweet.user.profile_image_url_https,
      },
      hashtags:
        tweet.entities && tweet.entities.hashtags.map((tag) => tag.text),
    }));

    results.tweets = tweets;

    return results;
  } catch (error) {
    return error;
  }
}
