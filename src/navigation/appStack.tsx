import React, { FC, Fragment, memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home";
import { DashboardScreen } from "../screens/dashboard";

export enum MainAppScreens {
  HomeScreen = "HomeScreen",
  DashboardScreen = "DashboardScreen",
}

export declare type MainAppStackParamsList = {
  HomeScreen: undefined;
  DashboardScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<MainAppStackParamsList>();

const MainAppNav: FC<any> = () => {
  return (
    <Fragment>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name={"HomeScreen"} component={HomeScreen} />
        <Screen name={"DashboardScreen"} component={DashboardScreen} />
      </Navigator>
    </Fragment>
  );
};

export default memo(MainAppNav);
