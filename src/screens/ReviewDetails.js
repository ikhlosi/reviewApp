import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";

const ReviewDetails = ({ route }) => {
  const heroDetails = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{heroDetails.title}</Text>
        <Text>{heroDetails.body}</Text>
        <Text>{heroDetails.rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
