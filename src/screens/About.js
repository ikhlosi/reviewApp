import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
