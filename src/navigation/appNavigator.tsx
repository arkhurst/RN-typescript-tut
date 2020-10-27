import React, { Fragment, FC, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Firebase from "firebase";
import AuthStack from "./authStack";
import AppStack from "./appStack";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator: FC<any> = () => {
  const [user, setUser] = useState<any>(null);

  const checkLoginStatus = () => {
    Firebase.auth().onAuthStateChanged((_user) => {
      if (_user) {
        setUser(_user);
      }
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <Fragment>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user === null ? (
            <>
              <Screen name={"Auth"} component={AuthStack} />
            </>
          ) : (
            <>
              <Screen name={"Core"} component={AppStack} />
            </>
          )}
        </Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default AppNavigator;
