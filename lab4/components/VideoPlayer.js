import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { Video } from "expo-av";

export const VideoPlayer = ({ URL }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: URL,
        }}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Text style={styles.textButton}>
            {status.isPlaying ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => video.current.stopAsync()}
        >
          <Text style={styles.textButton}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
