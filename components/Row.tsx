import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { SPACING } from "@/constants/theme";

type Props = {
  style?: StyleProp<ViewStyle>;
};
const Row = ({ children, style }: PropsWithChildren<Props>) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: SPACING.xs,
    margin: SPACING.xs,
    justifyContent: "space-between",
  },
});
