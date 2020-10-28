import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MainAppStackParamsList,
  MainAppScreens,
} from "../../navigation/appStack";
import { ButtonComponent, TextInputComponent } from "../../components";
import Firebase from "firebase";

declare type NavigationProp = StackNavigationProp<
  MainAppStackParamsList,
  MainAppScreens.HomeScreen
>;

interface Props {
  navigation: NavigationProp;
}

const Home = ({}: Props) => {
  const [msg, setMsg] = useState<string | null>(null);

  const _handlePost = async () => {
    if (msg) {
      const data = {
        msg,
        timeStamp: Date.now(),
        approved: false,
      };
      try {
        await Firebase.firestore().collection("posts").add(data);
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert(`Error`, `Missing fields`);
    }
  };
  const _handleSignout = () => {
    Firebase.auth().signOut();
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <ButtonComponent title="Sign out" onPress={_handleSignout} />
        <TextInputComponent placeHolder={"Post"} onChangeText={() => null} />
        <ButtonComponent title="Submit " onPress={_handlePost} />
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
