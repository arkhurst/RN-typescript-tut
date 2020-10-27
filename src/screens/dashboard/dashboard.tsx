import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MainAppStackParamsList,
  MainAppScreens,
} from "../../navigation/appStack";

declare type NavigationProp = StackNavigationProp<
  MainAppStackParamsList,
  MainAppScreens.DashboardScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Dashboard = ({}: Props) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Hello from Dashboard</Text>
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

export default Dashboard;
