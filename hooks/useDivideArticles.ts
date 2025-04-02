import { useMemo } from "react";
import { Article } from "@/models/article";

const useDivideArticles = (articles: Article[]) => {
  const headerArticle = useMemo(() => articles[0] ?? [], [articles]);
  const subArticles = useMemo(
    () => [articles[1] ?? [], articles[2] ?? []],
    [articles]
  );
  const remainingArticles = useMemo(() => articles.slice(3) ?? [], [articles]);

  return { headerArticle, subArticles, remainingArticles };
};

export default useDivideArticles;
