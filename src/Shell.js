import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "./assets/colors/colors";
import avatar from "./assets/icons/avatar.png";
import { useNavigation } from "@react-navigation/native";
// Screens
import Landing from "./screens/Landing/Landing";
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import About from "./screens/About/About";
import Settings from "./screens/Settings/Settings";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.black, paddingTop: 50 }}>
      <Image
        source={avatar}
        style={{
          width: 125,
          height: 125,
          alignSelf: "center",
          borderRadius: 100,
          marginTop: 20,
          marginBottom: 30,
        }}
      />
      <View style={{ paddingHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
            // props.navigation.closeDrawer();
          }}
          style={{
            backgroundColor: "#161616",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontFamily: "FredokaRegular",
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
            // props.navigation.closeDrawer();
          }}
          style={{
            backgroundColor: "#161616",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontFamily: "FredokaRegular",
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
            // props.navigation.closeDrawer();
          }}
          style={{
            backgroundColor: "#161616",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontFamily: "FredokaRegular",
            }}
          >
            About
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
          position: "absolute",
          bottom: Platform.OS === "ios" ? 40 : 55,
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Logout", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  // Handle logout logic here
                  // navigation.navigate("Landing");
                },
              },
            ]);
          }}
          style={{
            backgroundColor: "#161616",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: colors.red,
              fontSize: 20,
              fontFamily: "FredokaRegular",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "gray", marginTop: 10, textAlign: "left" }}>
          App Version: 1.0.0
        </Text>
      </View>
    </View>
  );
};

const Shell = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "red",
          width: 260,
        },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.gray,
        drawerPosition: "left", // ou 'right'
        drawerType: "slide", // 'front', 'back' ou 'slide'
        overlayColor: "rgba(0, 0, 0, 0.6)", // couleur de l'overlay
        edgeWidth: 50, // distance depuis le bord pour activer le swipe
        gestureHandlerProps: {
          // props du gesture handler
          activeOffsetX: [-10, 10],
        },
        // keyboardDismissMode: "on-drag", // 'none' ou 'on-drag'
        minSwipeDistance: 50, // distance minimale de swipe
        hideStatusBar: false, // cacher la status bar
        statusBarAnimation: "fade", // animation de la status bar
        lazy: true,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      defaultStatus="closed" // 'open' ou 'closed'
      backBehavior="initialRoute" // 'none', 'initialRoute' ou 'order'
      detachInactiveScreens={true} // pour optimiser la mémoire
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Shell;
