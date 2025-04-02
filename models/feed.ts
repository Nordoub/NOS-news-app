import { Article } from "./article";
import { Metadata } from "./metaData";

export type RssFeed = {
  feed?: Metadata;
  items: Article[];
};
