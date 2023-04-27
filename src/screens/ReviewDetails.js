import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
  const heroDetails = route.params;
  const pressHandler = () => {
    navigation.pop();
  };
  return (
    <View style={globalStyles.container}>
      <Text>{heroDetails.title}</Text>
      <Text>{heroDetails.body}</Text>
      <Text>{heroDetails.rating}</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
