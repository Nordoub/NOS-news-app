import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import MainArticle from "./MainArticle";
import { Article } from "@/models/article";
import SubArticle from "./SubArticle";
import Row from "../Row";

type Props = {
  mainArticle: Article;
  subArticles: Article[];
  goToArticle: (id: string) => void;
};

const HeaderArticles = ({ goToArticle, mainArticle, subArticles }: Props) => {
  return (
    <View>
      <MainArticle
        article={mainArticle}
        onPress={() => goToArticle(mainArticle.guid)}
      />
      <Row>
        {subArticles.map((article, index) => (
          <SubArticle
            key={`${article.guid}${index}`}
            article={article}
            onPress={() => goToArticle(article.guid)}
          />
        ))}
      </Row>
    </View>
  );
};

export default memo(HeaderArticles);

const styles = StyleSheet.create({});
