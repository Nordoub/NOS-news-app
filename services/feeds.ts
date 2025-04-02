import { apiUrl } from "@/constants/config";
import { Category } from "../models/category";
import XMLParser from "../utils/XMLParser";
import { Article } from "@/models/article";
import { RssFeed } from "@/models/feed";

export const getFeed = async (category: Category): Promise<RssFeed> => {
  const response = await fetch(`${apiUrl}${category}`);
  const xmlString = await response.text();
  const parsedFeed = XMLParser(xmlString);
  return parsedFeed;
};
