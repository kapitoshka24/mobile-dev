import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "../styles/styles";
import OutputController from "./OutputController";
import InputController from "./InputController";
import StorageController from "./StorageController";
import { addToStorage } from "../utils/asyncStorage";

export default function FontChangerPage() {
  const [selectedFont, setSelectedFont] = useState(null);
  const [outputValue, setOutputValue] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [storageError, setStorageError] = useState("");

  const onPress = () => {
    if (!outputValue) {
      setStorageError(
        "Empty input or unapplied value! I can't store anything."
      );
      return;
    }
    setStorageError("Everything is okay, your text is stored.");
    addToStorage({ font: selectedFont, text: outputValue });
  };

  return (
    <View style={styles.container}>
      <InputController
        setOutputValue={setOutputValue}
        setIsApplied={setIsApplied}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        setStorageError={setStorageError}
      />

      <OutputController
        selectedFont={selectedFont}
        isApplied={isApplied}
        outputValue={outputValue}
      />

      <StorageController onPress={onPress} storageError={storageError} />
    </View>
  );
}
