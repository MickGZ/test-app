import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import MyPlanScreen from "../screens/MyPlan";
import ClaimsScreen from "../screens/Claims";
import DocumentsScreen from "../screens/Documents";
import NovaCardScreen from "../screens/NovaCard";

const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="MyPlan"
        component={MyPlanScreen}
        options={{
          headerTitle: "Plan Information",
        }}
      />
      <Stack.Screen name="Claims" component={ClaimsScreen} />
      <Stack.Screen name="Documents" component={DocumentsScreen} />
      <Stack.Screen name="NovaCard" component={NovaCardScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
