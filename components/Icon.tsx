import { Pressable, PressableProps, StyleSheet } from "react-native";
import React, { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import { DEFAULT_HITSLOP } from "@/constants/theme";

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
  ...pressableProps
}: IconProps) => {
  return (
    <Pressable
      hitSlop={DEFAULT_HITSLOP}
      onPressIn={onPress}
      {...pressableProps}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({});
