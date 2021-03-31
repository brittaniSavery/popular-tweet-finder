import axios from "axios";
import useSWR from "swr";

export function useTweetSearch(query, page) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    query && `/api?query=${query}&page=${page}`,
    fetcher
  );

  const tweets = data || [];
  const isLoading = query && !data && !error;

  return { tweets, isLoading, error };
}
