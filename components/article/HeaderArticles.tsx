import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import MainArticle from "./MainArticle";
import { Article } from "@/models/article";
import SubArticle from "./SubArticle";
import Row from "../Row";
import Divider from "../Divider";

type Props = {
  mainArticle: Article;
  subArticles: Article[];
  goToArticle: (id: string) => void;
};

const { height } = Dimensions.get("window");

const HeaderArticles = ({ goToArticle, mainArticle, subArticles }: Props) => {
  return (
    <View>
      <MainArticle
        article={mainArticle}
        onPress={() => goToArticle(mainArticle.guid)}
        height={height / 3}
        style={{ marginBottom: 5 }}
      />
      <Row>
        {subArticles.map((article, index) => (
          <SubArticle
            key={`${article.guid}${index}`}
            article={article}
            onPress={() => goToArticle(article.guid)}
            height={height / 6}
          />
        ))}
      </Row>
      <Divider style={styles.divider} />
    </View>
  );
};

export default memo(HeaderArticles);

const styles = StyleSheet.create({
  divider: { marginVertical: 5 },
});
