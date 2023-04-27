import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { globalStyles } from "../styles/global";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={globalStyles.screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title={"Heroes"} />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewDetails}
        options={({ navigation, route }) => {
          return {
            headerTitle: () => (
              <Header
                navigation={navigation}
                title={`Details: ${route.params.title}`}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
