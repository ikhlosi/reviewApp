import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={globalStyles.screenOptions}>
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
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};
