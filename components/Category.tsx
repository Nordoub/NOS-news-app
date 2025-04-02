import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { COLORS, FONT_SIZES } from "@/constants/theme";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

type Props = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};
const Category = ({ onPress, title, isSelected }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={[styles.text, isSelected && styles.selected]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Category);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.grey,
  },
  selected: {
    color: COLORS.focused,
    fontWeight: "800",
  },
  button: {
    padding: 10,
  },
});
