import * as React from "react";
import { StyleSheet, View } from "react-native";
import UserHeader from "./Components/Header";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./redux/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <UserHeader />
        <Login />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
