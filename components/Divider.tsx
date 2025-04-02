import { COLORS } from "@/constants/theme";
import React from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
};
const Divider = ({ style }: Props) => {
  return <View style={[$.divider, style]} />;
};

export default Divider;

const $ = StyleSheet.create({
  divider: {
    borderBottomColor: COLORS.lightgrey,
    borderBottomWidth: 1,
  },
});
