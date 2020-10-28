import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamsList,
  AuthScreens,
} from "../../../navigation/authStack";
import { TextInputComponent, ButtonComponent } from "../../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Firebase from "firebase";

declare type NavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthScreens.LoginScreen
>;

interface Props {
  navigation: NavigationProps;
}

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const _handleLogin = async () => {
    if (email && password) {
      try {
        const user = await Firebase.auth().signInWithEmailAndPassword(
          email,
          password
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert(`Error occured`, `Missing fields`);
    }
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInputComponent
          placeHolder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInputComponent
          secureTextEntry
          placeHolder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonComponent title="Login" onPress={_handleLogin} />
        <View style={styles.accountContainer}>
          <Text style={{ marginHorizontal: 5 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={{ color: "rgba(81, 135, 200, 1)" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  accountContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default Login;
