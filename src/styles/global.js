import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  titleText: {
    fontFamily: "hack-regular",
    fontSize: 36,
    color: "#333",
  },
});
