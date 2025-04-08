import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";
import { FONT_SIZES, SPACING } from "@/constants/theme";
import { Article } from "@/models/article";

type Props = {
  article: Article;
  height?: number;
  onPress?: () => void;
};

const SubArticle = ({ onPress, article, height = 125 }: Props) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
      <Image
        source={article.image}
        style={{ height, borderRadius: 5 }}
        transition={150}
      />
      <Text style={styles.title}>{article.title}</Text>
    </Pressable>
  );
};

export default memo(SubArticle);

const styles = StyleSheet.create({
  title: {
    margin: SPACING.x2s,
    fontSize: FONT_SIZES.s,
    fontWeight: "500",
  },
});
