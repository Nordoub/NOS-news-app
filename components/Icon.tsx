import { DEFAULT_HITSLOP } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

type IoniconsNames = ComponentProps<typeof Ionicons>["name"];

type IconProps = {
  name: IoniconsNames;
  color?: string;
  size?: number;
  onPress?: () => void;
} & PressableProps;

const Icon = ({
  onPress,
  name,
  color = "grey",
  size = 24,
  style,
  ...pressableProps
}: IconProps) => {
  return (
    <Pressable
      hitSlop={DEFAULT_HITSLOP}
      onPressIn={onPress}
      style={[styles.container, style as StyleProp<ViewStyle>]}
      {...pressableProps}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
