import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

//  <Ionicons name="md-checkmark-circle" size={32} color="green" />

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeMenu"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
