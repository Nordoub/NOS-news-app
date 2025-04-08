import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";
import { Article as ArticleType } from "@/models/article";
import { SPACING } from "@/constants/theme";

type Props = {
  article: ArticleType;
  height?: number;
  width?: number;
  onPress?: () => void;
};

const Article = ({ onPress, article, height = 80, width = 100 }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={article.image}
        style={{ height, width, borderRadius: 5 }}
        transition={150}
      />
      <Text style={{ flex: 1, fontWeight: "500" }}>{article.title}</Text>
    </Pressable>
  );
};

export default memo(Article);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
