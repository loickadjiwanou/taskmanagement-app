import React, { useState } from "react";
import { View, Text, Image, StatusBar, useColorScheme } from "react-native";
import LandingStyle from "./Landing.style.js";
import landingImage from "../../assets/icons/icon.png";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import colors from "../../assets/colors/colors.js";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const Landing = (props) => {
  const theme = useColorScheme();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <View style={LandingStyle.view}>
      <Image source={landingImage} style={LandingStyle.landingImage} />
      <View style={LandingStyle.container}>
        <Text style={LandingStyle.title}>Welcome to{"\n"}Task Management</Text>

        <BlurView intensity={20} tint="dark" style={LandingStyle.blurContainer}>
          <Text style={LandingStyle.title1}>Get tidy every day. </Text>
          <Text style={LandingStyle.title2}>
            You can organize your tasks in one place.
          </Text>
          <View style={LandingStyle.button}>
            <CustomButton
              title={"Get started now"}
              textColor={colors.white}
              borderColor={colors.black}
              borderRadius={50}
              buttonHeight={50}
              isDisabled={false}
              color={colors.black}
              loading={loading}
              handlePress={handleGetStarted}
            />
          </View>
        </BlurView>
      </View>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </View>
  );
};
export default Landing;
