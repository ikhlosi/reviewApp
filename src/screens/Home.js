import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import uuid from "react-native-uuid";
import Card from "../shared/Card";

const Home = (props) => {
  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: uuid.v4() },
    { title: "Giant", rating: 4, body: "lorem ipsum", key: uuid.v4() },
    { title: "Mini", rating: 3, body: "lorem ipsum", key: uuid.v4() },
  ]);

  const { navigation } = props;

  const pressHandler = (item) => {
    navigation.navigate("Review", item);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
