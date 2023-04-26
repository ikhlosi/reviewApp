import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    "notosans-black": require("./assets/fonts/NotoSans-Black.ttf"),
    "hack-regular": require("./assets/fonts/hack-regular.ttf"),
  });

  if (!fontLoaded) {
    return <Text>App is loading...</Text>;
  }
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
