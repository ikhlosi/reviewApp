import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Heroes",
          }}
        />
        <Stack.Screen
          name="Review"
          component={ReviewDetails}
          options={{
            title: "Hero Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
