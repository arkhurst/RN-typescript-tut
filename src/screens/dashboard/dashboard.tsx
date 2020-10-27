import React, { FC, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

const Dashboard: FC = () => {
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
