import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { getStorage, storeData } from "../utils/asyncStorage";

export default function AppStorage() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    const getStorageData = async () => {
      const storage = await getStorage();
      setStorage(storage);
    };
    getStorageData();
  }, []);

  const outputStyle = (font) => ({
    fontSize: 16,
    fontFamily: font,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    textAlign: "center",
  });

  const clearStorage = () => {
    storeData("storage", "");
    setStorage([]);
  };

  return (
    <View style={styles.container}>
      {storage.length !== 0 ? (
        storage.map((obj, i) => (
          <Text key={i} style={outputStyle(obj.font)}>{`${i + 1}. ${
            obj.text
          }`}</Text>
        ))
      ) : (
        <Text style={{ marginBottom: 20 }}>Storage is empty</Text>
      )}
      <TouchableOpacity
        disabled={storage.length === 0}
        style={styles.storageBtn}
        onPress={clearStorage}
      >
        <Text style={styles.storageText}>Clear storage</Text>
      </TouchableOpacity>
    </View>
  );
}
