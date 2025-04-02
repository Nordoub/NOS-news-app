import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";
import { COLORS, FONT_SIZES } from "@/constants/theme";
import Gradient from "./Gradient";

type Props = {
  imgUrl: string | null;
  title?: string;
  height?: number;
  onPress?: () => void;
};
const HeaderArticle = ({ onPress, imgUrl, title, height = 300 }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={imgUrl}
        style={{ height, resizeMode: "cover" }}
        transition={150}
      />
      <Gradient />
      {title && <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

export default memo(HeaderArticle);

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
