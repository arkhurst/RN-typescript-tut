import React, { FC, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

const Signup: FC = () => {
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
