import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import ProfileStyle from "./Profile.style.js";
import colors from "../../assets/colors/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/icons/avatar.png";

const Profile = (props) => {
  const navigation = useNavigation();

  return (
    <View style={ProfileStyle.view}>
      <View style={ProfileStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          style={ProfileStyle.backIcon}
        >
          <AntDesign name="left" size={20} color={colors.white} />
        </TouchableOpacity>
        <Image source={avatar} style={ProfileStyle.avatar} />
      </View>

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
          profile
        </Text>
      </ScrollView>
    </View>
  );
};
export default Profile;
