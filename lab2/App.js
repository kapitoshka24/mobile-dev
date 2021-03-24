import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles/styles";
import OutputController from "./components/OutputController";
import InputController from "./components/InputController";

export default function App() {
  const [selectedFont, setSelectedFont] = useState(null);
  const [outputValue, setOutputValue] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  return (
    <View style={styles.container}>
      <InputController
        setOutputValue={setOutputValue}
        setIsApplied={setIsApplied}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      />

      <OutputController
        selectedFont={selectedFont}
        isApplied={isApplied}
        outputValue={outputValue}
      />
    </View>
  );
}
