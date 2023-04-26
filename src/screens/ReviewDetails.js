import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text>ReviewDetails</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
