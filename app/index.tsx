import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href={"/search"}>navigate</Link>
      <Link href={"/detail"}>navigate</Link>
    </View>
  );
};

export default HomeScreen;
