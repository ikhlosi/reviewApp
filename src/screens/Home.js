import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const Home = (props) => {
  const { navigation } = props;

  const pressHandler = () => {
    navigation.navigate("Review");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button onPress={() => pressHandler()} title="Go to ReviewDetails" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
