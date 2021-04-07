import React from "react";
import { useFonts } from "@expo-google-fonts/dev";
import fonts from "../libs/fonts";
import { View, Text } from "react-native";

export default function OutputController({
  selectedFont,
  isApplied,
  outputValue,
}) {
  const [loaded] = useFonts({ ...fonts });

  if (!loaded) {
    return null;
  }

  const displayMessage = () =>
    outputValue
      ? `Your text displayed in the selected font: ${outputValue}`
      : "Empty input! Enter something!";

  const outputStyle = (font) => ({
    display: isApplied ? "block" : "none",
    fontSize: 16,
    fontFamily: outputValue ? font : null,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    textAlign: "center",
    color: isApplied && outputValue ? "black" : "red",
  });

  return (
    <View>
      <Text style={outputStyle(selectedFont)}>
        {isApplied ? displayMessage() : ""}
      </Text>
    </View>
  );
}
