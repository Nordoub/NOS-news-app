import { SafeAreaView, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import { COLORS } from "@/constants/theme";

const Screen = ({ children }: PropsWithChildren) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
