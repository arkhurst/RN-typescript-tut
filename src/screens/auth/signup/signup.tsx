import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamsList,
  AuthScreens,
} from "../../../navigation/authStack";

declare type NavigationProp = StackNavigationProp<
  AuthStackParamsList,
  AuthScreens.SignupScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Signup = ({ navigation }: Props) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Hello From Signup</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
