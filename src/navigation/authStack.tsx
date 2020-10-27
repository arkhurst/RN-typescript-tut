import React, { FC, Fragment, memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignupScreen } from "../screens/auth";

export enum AuthScreens {
  LoginScreen = "LoginScreen",
  SignupScreen = "SignupScreen",
}

export declare type AuthStackParamsList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>();

const AuthNavigator: FC<any> = () => {
  return (
    <Fragment>
      <Navigator>
        <Screen name={"LoginScreen"} component={LoginScreen} />
        <Screen name={"SignupScreen"} component={SignupScreen} />
      </Navigator>
    </Fragment>
  );
};

export default memo(AuthNavigator);
