import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity, View, TextInput, Text } from "react-native";
import Picker from "react-native-picker-select";
import pickerStyles from "./styles/pickerStyles";
import styles from "./styles/styles";
import inputStyles from "./styles/inputStyles";
import {
  useFonts,
  Montserrat_400Regular,
  CedarvilleCursive_400Regular,
  Monofett_400Regular,
  MedievalSharp_400Regular,
  Smythe_400Regular,
  Viga_400Regular,
  BeVietnam_400Regular,
  Meddon_400Regular,
  AveriaSansLibre_400Regular,
  Peralta_400Regular,
  Pacifico_400Regular,
} from "@expo-google-fonts/dev";

export default function App() {
  const [inputValue, setInputValue] = useState();
  const [selectedFont, setSelectedFont] = useState(null);
  const [outputValue, setOutputValue] = useState();
  const [loaded] = useFonts({
    Montserrat_400Regular,
    CedarvilleCursive_400Regular,
    Monofett_400Regular,
    MedievalSharp_400Regular,
    Smythe_400Regular,
    Viga_400Regular,
    BeVietnam_400Regular,
    AveriaSansLibre_400Regular,
    Meddon_400Regular,
    Peralta_400Regular,
    Pacifico_400Regular,
  });

  if (!loaded) {
    return null;
  }

  const onApply = () => {
    setOutputValue(inputValue);
  };

  const onCancel = () => {
    setOutputValue("");
    setInputValue("");
    setSelectedFont(null);
  };

  const outputStyle = (font) => ({
    fontSize: 16,
    marginBottom: 20,
    fontFamily: font,
    marginLeft: 25,
    marginRight: 25,
    textAlign: "center",
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        That app shows you text using selected font.
      </Text>
      <Picker
        placeholder={{ label: "Select font...", value: null }}
        style={pickerStyles}
        useNativeAndroidPickerStyle={false}
        pickerProps={{ value: selectedFont || "" }}
        value={selectedFont}
        onValueChange={(value) => {
          setSelectedFont(value);
        }}
        items={[
          { label: "Averia", value: "AveriaSansLibre_400Regular" },
          { label: "Cedarville", value: "CedarvilleCursive_400Regular" },
          { label: "Medieval", value: "MedievalSharp_400Regular" },
          { label: "Meddon", value: "Meddon_400Regular" },
          { label: "Monofett", value: "Monofett_400Regular" },
          { label: "Montserrat", value: "Montserrat_400Regular" },
          { label: "Paralta", value: "Peralta_400Regular" },
          { label: "Pacifico", value: "Pacifico_400Regular" },
          { label: "Smythe", value: "Smythe_400Regular" },
          { label: "Viga", value: "Viga_400Regular" },
          { label: "Vietnam", value: "BeVietnam_400Regular" },
        ]}
      />

      <TextInput
        placeholder={"Enter text..."}
        value={inputValue}
        onChangeText={setInputValue}
        style={inputStyles.textInput}
      />

      <Text style={outputStyle(selectedFont)}>{outputValue}</Text>

      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.button} onPress={onApply}>
          <Text style={styles.text}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
