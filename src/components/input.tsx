import React, { FC, Fragment } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("screen");

interface Props {
  placeHolder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}
const Input: FC<Props> = ({ placeHolder, onChangeText, secureTextEntry }) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput
          placeholder={placeHolder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry || false}
          style={styles.input}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});
export default Input;
