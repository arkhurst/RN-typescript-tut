import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MainAppStackParamsList,
  MainAppScreens,
} from "../../navigation/appStack";

declare type NavigationProp = StackNavigationProp<
  MainAppStackParamsList,
  MainAppScreens.HomeScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Home = ({}: Props) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Hello from Home</Text>
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
