import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const useHeader = (options: NativeStackNavigationOptions) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      ...options,
    });
  }, [options]);
};

export default useHeader;

const styles = StyleSheet.create({});
