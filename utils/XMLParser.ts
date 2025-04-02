import { Article } from "@/models/article";
import { RssFeed } from "@/models/feed";

const ID_CHAR_COUNT = 7;

const extractItemValues = (xmlString: string) => {
  const regex = /<item>([\s\S]*?)<\/item>/g;
  const matches = [];
  let match;

  while ((match = regex.exec(xmlString)) !== null) {
    matches.push(match[1]);
  }

  return matches;
};

const XMLParser = (xmlString: string): RssFeed => {
  const itemsArray = extractItemValues(xmlString);

  const items = itemsArray.map((item) => {
    const cleanCdata = (text?: string) => {
      return text ? text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1") : "";
    };

    const result: Article = {
      title: "",
      link: "",
      description: "",
      pubDate: "",
      guid: "",
      image: null,
    };

    const titleMatch = /<title>\s*([\s\S]*?)\s*<\/title>/g.exec(item);
    result.title = cleanCdata(titleMatch ? titleMatch[1].trim() : "");

    const linkMatch = /<link>([\s\S]*?)<\/link>/g.exec(item);
    linkMatch ? (result.link = linkMatch[1].trim()) : "";

    const descMatch = /<description>\s*([\s\S]*?)\s*<\/description>/g.exec(
      item
    );
    result.description = cleanCdata(
      descMatch
        ? descMatch[1]
            .trim()
            .replace(/<p>/g, "")
            .replace(/<h2>/g, "")
            .replace(/<\/h2>/g, "")
            .replace(/<\/p>/g, "\n")
        : ""
    );

    const enclosureMatch = /<enclosure[^>]*url="([^"]*)"[^>]*\/>/g.exec(item);
    enclosureMatch ? (result.image = enclosureMatch[1]) : "";

    const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/g.exec(item);
    pubDateMatch ? (result.pubDate = pubDateMatch[1].trim()) : "";

    const guidMatch = /<guid[^>]*>([\s\S]*?)<\/guid>/g.exec(item);
    guidMatch ? (result.guid = guidMatch[1].trim().slice(-ID_CHAR_COUNT)) : "";

    return result;
  });
  return { items };
};

export default XMLParser;
