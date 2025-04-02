import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { RssFeed } from "../models/feed";
import { getFeed } from "../services/feeds";
import { QUERY_KEYS } from "../constants/queryKeys";
import { Category } from "../models/category";

type Options = Omit<UseQueryOptions<RssFeed>, "queryKey" | "queryFn">;

const useGetFeedQuery = (category: Category, options?: Options) => {
  return useQuery({
    queryKey: [QUERY_KEYS.feed, category],
    queryFn: () => getFeed(category),
    ...options,
  });
};

export default useGetFeedQuery;
