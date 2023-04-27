// must be at top
import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import HomeStack from "./src/routes/HomeStack";

export default function App() {
  const [fontLoaded] = useFonts({
    "notosans-black": require("./assets/fonts/NotoSans-Black.ttf"),
    "hack-regular": require("./assets/fonts/hack-regular.ttf"),
  });

  if (!fontLoaded) {
    return <Text>App is loading...</Text>;
  }

  return <HomeStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
