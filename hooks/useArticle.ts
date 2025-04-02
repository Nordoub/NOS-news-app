import { useMemo } from "react";
import { useFeedContext } from "./useFeedContext";
import useGetFeedQuery from "./useGetFeedQuery";

const useArticle = (id?: string) => {
  const { selectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(selectedCategory);

  const article = useMemo(
    () => feed?.items.find((item) => item.guid === id),
    [id, feed]
  );

  return article;
};

export default useArticle;
