import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

function Login() {
  const state = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onChangeEmailHandler = (value) => {
    setEmail(value);
  };
  onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  onSubmitHandler = () => {
    console.log("in on submit");
    let data = {
      email: email,
      password: password,
    };
    dispatch(actions.loginUser(data));
  };

  return (
    <View style={styles.login}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.form}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={this.onChangeEmailHandler}
        />
        <Text style={styles.text}>Password </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={this.onChangePasswordHandler}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="cancle" />
        <Button title="submit" onPress={this.onSubmitHandler} />
      </View>
      <Text>{state.loggedIn}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: "80%",
    padding: 10,
    margin: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.26,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  form: {
    padding: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: 16,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  buttons: {
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
});

export default connect()(Login);
