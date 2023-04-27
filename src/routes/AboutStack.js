// AboutStack exists to give About screen the same header as HomeStack -> make app more uniform in layout
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import { globalStyles } from "../styles/global";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={globalStyles.screenOptions}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title={"About"} />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
