import { useMemo } from "react";
import { useFeedContext } from "./useFeedContext";
import useGetFeedQuery from "./useGetFeedQuery";

const useFilteredArticles = (searchValue: string) => {
  const { selectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(selectedCategory);

  const searchResults = useMemo(() => {
    if (!searchValue) return feed?.items;

    return feed?.items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, feed]);

  return searchResults;
};

export default useFilteredArticles;
