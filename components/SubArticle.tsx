import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";
import { FONT_SIZES } from "@/constants/theme";

type Props = {
  imgUrl: string | null;
  title: string;
  height?: number;
  onPress?: () => void;
};

const SubArticle = ({ onPress, imgUrl, height = 300, title }: Props) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
      <Image
        source={imgUrl}
        style={{ height, borderRadius: 5 }}
        transition={150}
      />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default memo(SubArticle);

const styles = StyleSheet.create({
  title: {
    margin: 5,
    fontSize: FONT_SIZES.s,
    fontWeight: "500",
  },
});
