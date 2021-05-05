import React, { useState } from "react";
import { View } from "react-native";
import { VideoPlayer } from "./VideoPlayer";
import { AudioPlayer } from "./AudioPlayer";
import { PreventPlay } from "./PreventPlay";

export const Switch = ({ route }) => {
  const [URL, setURL] = useState("");

  return (
    <View>
      {URL ? (
        route === "Video" ? (
          <VideoPlayer URL={URL} />
        ) : (
          <AudioPlayer URL={URL} />
        )
      ) : (
        <PreventPlay route={route} setURL={setURL} />
      )}
    </View>
  );
};
