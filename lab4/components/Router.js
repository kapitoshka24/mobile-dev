import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export const Router = ({ route, setRoute }) => {
  return (
    <View>
      {!route ? (
        <>
          <Text style={styles.text}>
            Choose type of file you want to interact with:
          </Text>

          <View style={styles.fixToText}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setRoute("Video")}
            >
              <Text style={styles.textButton}>Video</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setRoute("Audio")}
            >
              <Text style={styles.textButton}>Audio</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <TouchableOpacity
          style={styles.buttonHome}
          onPress={() => setRoute("")}
        >
          <Text style={styles.smallText}>Home</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
