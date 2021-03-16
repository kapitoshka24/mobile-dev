import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity, View, TextInput, Text } from "react-native";
import Picker from "react-native-picker-select";
import pickerStyles from "./styles/pickerStyles";
import styles from "./styles/styles";
import inputStyles from "./styles/inputStyles";
import fonts from "./libs/fonts";
import { useFonts } from "@expo-google-fonts/dev";

export default function App() {
  const [inputValue, setInputValue] = useState();
  const [selectedFont, setSelectedFont] = useState(null);
  const [outputValue, setOutputValue] = useState();
  const [isApplied, setIsApplied] = useState(false);
  const [loaded] = useFonts({ ...fonts });

  if (!loaded) {
    return null;
  }

  const onApply = () => {
    setOutputValue(inputValue ? inputValue : "");
    setIsApplied(true);
  };

  const onCancel = () => {
    setOutputValue("");
    setInputValue("");
    setSelectedFont(null);
    setIsApplied(false);
  };

  const outputStyle = (font) => ({
    fontSize: 16,
    marginBottom: 20,
    fontFamily: outputValue ? font : null,
    marginLeft: 25,
    marginRight: 25,
    textAlign: "center",
    color: isApplied && outputValue ? "black" : "red",
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

      <Text style={outputStyle(selectedFont)}>
        {isApplied ? outputValue || "Empty input! Enter something!" : ""}
      </Text>

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
