import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Picker from "react-native-picker-select";
import inputStyles from "../styles/inputStyles";
import { styles } from "../styles/styles";
import pickerStyles from "../styles/pickerStyles";
import * as DocumentPicker from "expo-document-picker";
import { CreateAlert } from "./CreateAlert";

export const PreventPlay = ({ setURL }) => {
  const [enterType, setEnterType] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedURL, setSelectedURL] = useState("");

  const selectLabels = [
    { label: "URL", value: "URL" },
    { label: "File", value: "File" },
  ];

  const applyChanges = () => {
    if (selectedType || selectedURL) {
      if (selectedType) {
        setEnterType(selectedType);
      }
      if (selectedURL) {
        setURL(selectedURL);
      }
    } else {
      CreateAlert("You haven't selected anything!");
    }
  };

  const onFilePick = async () => {
    const file = await DocumentPicker.getDocumentAsync();

    setSelectedURL(file.uri);
  };

  return (
    <View>
      {!enterType && (
        <>
          <Text style={styles.textBottom}>Choose your input type:</Text>
          <Picker
            style={pickerStyles}
            onValueChange={(value) => setSelectedType(value)}
            items={selectLabels}
            value={selectedType}
            placeholder={{ label: "Select a Type...", value: "" }}
          />
        </>
      )}
      {!!enterType ? (
        enterType === "File" ? (
          <TouchableOpacity style={styles.pickBtn} onPress={onFilePick}>
            <Text style={styles.applyText}>Pick File</Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={inputStyles.textInput}
            value={selectedURL}
            onChangeText={(text) => setSelectedURL(text)}
          />
        )
      ) : (
        <></>
      )}
      <TouchableOpacity style={styles.applyBtn} onPress={applyChanges}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};
