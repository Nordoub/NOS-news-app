import { Pressable, StyleSheet, Text } from "react-native";
import React, { memo } from "react";
import Image from "@/components/Image";

type Props = {
  imgUrl: string | null;
  title: string;
  height?: number;
  width?: number;
  onPress?: () => void;
};

const Article = ({
  onPress,
  imgUrl,
  title,
  height = 100,
  width = 100,
}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={imgUrl}
        style={{ height, width, borderRadius: 5 }}
        transition={150}
      />
      <Text style={{ flex: 1, fontWeight: "500" }}>{title}</Text>
    </Pressable>
  );
};

export default memo(Article);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
