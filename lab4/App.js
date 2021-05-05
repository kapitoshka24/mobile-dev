import React, { useState } from "react";
import { View } from "react-native";
import { Router } from "./components/Router";
import { Switch } from "./components/Switch";
import { styles } from "./styles/styles";

export default function App() {
  const [route, setRoute] = useState("");

  return (
    <View style={styles.container}>
      <Router route={route} setRoute={setRoute} />
      {route ? <Switch route={route} /> : <></>}
    </View>
  );
}
