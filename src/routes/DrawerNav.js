import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

export default DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
