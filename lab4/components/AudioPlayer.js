import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { styles } from "../styles/styles";

export const AudioPlayer = ({ URL }) => {
  const [sound, setSound] = useState({});
  const [status, setStatus] = useState({});

  useEffect(() => {
    const setNewSound = async () => {
      console.log(URL);
      const { sound } = await Audio.Sound.createAsync(
        { uri: URL },
        { shouldPlay: false }
      );
      setSound(sound);
    };
    setNewSound();
  }, []);

  return (
    <View style={styles.fixToText}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (status.isPlaying) {
            setStatus({ isPlaying: false });
            sound.pauseAsync();
          } else {
            setStatus({ isPlaying: true });
            sound.playAsync();
          }
        }}
      >
        <Text style={styles.textButton}>
          {status.isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setStatus({ isPlaying: false });
          sound.stopAsync();
        }}
      >
        <Text style={styles.textButton}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};
