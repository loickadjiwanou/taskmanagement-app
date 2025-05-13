import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import AboutStyle from "./About.style.js";
import colors from "../../assets/colors/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/icons/avatar.png";

const About = (props) => {
  const navigation = useNavigation();

  return (
    <View style={AboutStyle.view}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={AboutStyle.backIcon}
      >
        <AntDesign name="left" size={20} color={colors.white} />
      </TouchableOpacity>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 200,
          }}
        >
          about
        </Text>
      </ScrollView>
    </View>
  );
};
export default About;
