import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamsList,
  AuthScreens,
} from "../../../navigation/authStack";

declare type NavigationProps = StackNavigationProp<
  AuthStackParamsList,
  AuthScreens.LoginScreen
>;

interface Props {
  navigation: NavigationProps;
}

const Login = ({ navigation }: Props) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Hello From Login</Text>
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
});

export default Login;
