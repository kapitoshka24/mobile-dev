import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function OutputController({ onPress, storageError }) {
  return (
    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.storageBtn} onPress={onPress}>
          <Text style={styles.storageText}>Save to storage</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 20 }}>{storageError}</Text>
    </View>
  );
}
