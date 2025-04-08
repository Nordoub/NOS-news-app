import { useMemo } from "react";
import { Article } from "@/models/article";

const useDivideArticles = (articles: Article[]) => {
  const { mainArticle, subArticles, remainingArticles } = useMemo(() => {
    const mainArticle = articles[0] ?? [];
    const subArticles = [articles[1] ?? [], articles[2] ?? []];
    const remainingArticles = articles.slice(3) ?? [];

    return { mainArticle, subArticles, remainingArticles };
  }, [articles]);

  return { mainArticle, subArticles, remainingArticles };
};

export default useDivideArticles;
