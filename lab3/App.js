import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles/styles";
import FontChangerPage from "./components/FontChangerPage";
import AppStorage from "./components/AppStorage";

export default function App() {
  const [isStorage, setIsStorage] = useState(false);

  const handlePress = () => {
    setIsStorage(!isStorage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.showStorageBtn} onPress={handlePress}>
        <Text style={styles.storageText}>
          {isStorage ? "Go back" : "Show storage"}
        </Text>
      </TouchableOpacity>

      {isStorage ? (
        <AppStorage setIsStorage={setIsStorage} />
      ) : (
        <FontChangerPage />
      )}
    </View>
  );
}
