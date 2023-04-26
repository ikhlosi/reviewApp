import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.pop();
  };
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
      <Button onPress={() => pressHandler()} title="Go Back" />
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
