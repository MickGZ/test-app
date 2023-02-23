import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeMenu"
        component={HomeNavigation}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;
