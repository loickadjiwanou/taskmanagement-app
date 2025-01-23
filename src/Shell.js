import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./assets/colors/colors";
// Screens
import Landing from "./screens/Landing/Landing";
import Home from "./screens/Home/Home";
// Drawer Navigator
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <Text style={{ color: colors.white, padding: 20, fontSize: 18 }}>
        Menu
      </Text>
      {/* Add custom drawer content here */}
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.black,
          width: 240,
        },
        drawerLabelStyle: {
          color: colors.white,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const Shell = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Shell;
