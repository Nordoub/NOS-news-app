import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";
import { COLORS, FONT_SIZES } from "@/constants/theme";
import Gradient from "../Gradient";
import { Article } from "@/models/article";

type Props = {
  article: Article;
  height?: number;
  onPress?: () => void;
};
const MainArticle = ({ onPress, article, height = 250 }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={article.image}
        style={{ height, resizeMode: "cover" }}
        transition={150}
      />
      <Gradient />
      {article.title && <Text style={styles.title}>{article.title}</Text>}
    </Pressable>
  );
};

export default memo(MainArticle);

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    fontWeight: "bold",
    color: COLORS.textInverted,
    fontSize: FONT_SIZES.l,
  },
});
