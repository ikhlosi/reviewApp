import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  titleText: {
    fontFamily: "hack-regular",
    fontSize: 36,
  },
});
