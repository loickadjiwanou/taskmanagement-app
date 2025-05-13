import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import SettingsStyle from "./Settings.style.js";
import colors from "../../assets/colors/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/icons/avatar.png";

const Settings = (props) => {
  const navigation = useNavigation();

  return (
    <View style={SettingsStyle.view}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={SettingsStyle.backIcon}
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
          settings
        </Text>
      </ScrollView>
    </View>
  );
};
export default Settings;
