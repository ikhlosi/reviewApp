import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => openMenu()}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
