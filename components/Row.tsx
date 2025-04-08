import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { SPACING } from "@/constants/theme";

const Row = ({ children }: PropsWithChildren) => {
  return <View style={styles.row}>{children}</View>;
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
