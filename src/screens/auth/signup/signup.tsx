import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamsList,
  AuthScreens,
} from "../../../navigation/authStack";
import { TextInputComponent, ButtonComponent } from "../../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

declare type NavigationProp = StackNavigationProp<
  AuthStackParamsList,
  AuthScreens.SignupScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Signup = ({ navigation }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInputComponent
          placeHolder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInputComponent
          placeHolder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInputComponent
          secureTextEntry
          placeHolder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonComponent
          title="Sign Up"
          onPress={() => Alert.alert("hey boo")}
        />
        <View style={styles.accountContainer}>
          <Text style={{ marginHorizontal: 5 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={{ color: "rgba(81, 135, 200, 1)" }}>Login</Text>
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
  },
  accountContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default Signup;
