import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function UserHeader() {
  return (
    <View style={Style.header}>
      <Text style={Style.headerTitle}>React Native</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  header: {
    padding: 10,
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  headerTitle: {
    fontSize: 22,
    color: "black",
  },
});
