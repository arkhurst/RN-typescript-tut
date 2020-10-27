import React, { Fragment, FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import AppStack from "./appStack";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator: FC<any> = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name={"Auth"} component={AuthStack} />
          <Screen name={"Core"} component={AppStack} />
        </Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default AppNavigator;
