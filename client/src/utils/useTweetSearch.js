import axios from "axios";
import { useSWRInfinite } from "swr";

export function useTweetSearch(query) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.tweets) return null; // reached the end
    if (pageIndex === 0) return query && `/api?query=${query}`; // first page, we don't have `previousPageData`

    return query && `/api?query=${query}&next_id=${previousPageData.next_id}`; // add the cursor to the API endpoint
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  let tweets = [];

  data &&
    data.forEach((page) => {
      console.log([...page.tweets]);
      tweets = tweets.concat([...page.tweets]);
    });

  console.log(tweets);
  const isLoading = query && !data && !error;

  return { tweets, page: size, setPage: setSize, isLoading, error };
}
