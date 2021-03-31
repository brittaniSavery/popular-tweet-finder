const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios").default;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  const query = req.query.query;
  const page = req.query.page || 1;

  getTweets(query, page)
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

async function getTweets(query, page) {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("count", page * 5);
  params.set("result_type", "popular");

  try {
    const response = await axios.get(
      "https://api.twitter.com/1.1/search/tweets.json",
      {
        params: params,
        headers: { Authorization: `Bearer ${process.env.TWITTER_API_KEY}` },
      }
    );

    const tweets = response.data.statuses.map((tweet) => ({
      text: tweet.text,
      author: {
        name: tweet.user.screen_name,
        icon: tweet.user.profile_image_url_https,
      },
      hashtags:
        tweet.entities && tweet.entities.hashtags.map((tag) => tag.text),
    }));

    return tweets;
  } catch (error) {
    return error;
  }
}
