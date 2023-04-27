// AboutStack exists to give About screen the same header as HomeStack -> make app more uniform in layout
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={globalStyles.screenOptions}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About",
        }}
      />
    </Stack.Navigator>
  );
};
