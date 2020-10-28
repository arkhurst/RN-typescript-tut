import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MainAppStackParamsList,
  MainAppScreens,
} from "../../navigation/appStack";
import { ButtonComponent } from "../../components";
import Firebase from "firebase";

declare type NavigationProp = StackNavigationProp<
  MainAppStackParamsList,
  MainAppScreens.HomeScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Home = ({}: Props) => {
  const _handleSignout = () => {
    Firebase.auth().signOut();
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <ButtonComponent title="Sign out" onPress={_handleSignout} />
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

export default Home;
