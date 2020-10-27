import React, { FC, Fragment } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Dimensions, View, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

interface Props {
  title: string;
  onPress: () => void;
}

const Button: FC<Props> = ({ title, onPress }) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  text: {
    color: "#fff",
  },
});

export default Button;
