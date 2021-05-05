import React from "react";
import { Alert } from "react-native";

export const CreateAlert = (msg) =>
  Alert.alert(msg, "", [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
