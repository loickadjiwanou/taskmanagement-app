import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import BottomNavStyle from "./BottomNav.style.js";
import { BlurView } from "expo-blur";
import {
  Octicons,
  Feather,
  FontAwesome6,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../../assets/colors/colors.js";
import { useNavigate } from "react-router-native";
import polygon from "../../assets/icons/polygon.png";

const BottomNav = (props) => {
  const navigation = useNavigate();

  const [activatedItem, setActivatedItem] = useState("home");

  const handleGoTo = (item) => {
    setActivatedItem(item.toLowerCase());
    navigation(`${item}`.toLowerCase());
  };

  return (
    <BlurView intensity={75} tint="dark" style={BottomNavStyle.view}>
      <TouchableOpacity
        onPress={() => handleGoTo("home")}
        style={BottomNavStyle.item}
      >
        <Feather
          name={"home"}
          size={26}
          color={activatedItem === "home" ? colors.mainlight : colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleGoTo("stats")}
        style={BottomNavStyle.item}
      >
        <MaterialIcons
          name={"query-stats"}
          size={26}
          color={activatedItem === "stats" ? colors.mainlight : colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleGoTo("createnft")}
        style={BottomNavStyle.itemplus}
      >
        <Image source={polygon} style={BottomNavStyle.middle} />
        <FontAwesome6
          name={"plus"}
          size={30}
          style={BottomNavStyle.plus}
          color={activatedItem === "createnft" ? colors.white : colors.maindark}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleGoTo("search")}
        style={BottomNavStyle.item}
      >
        <Octicons
          name={"search"}
          size={26}
          color={activatedItem === "search" ? colors.mainlight : colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleGoTo("profile")}
        style={BottomNavStyle.item}
      >
        <FontAwesome
          name={"user-o"}
          size={26}
          color={activatedItem === "profile" ? colors.mainlight : colors.white}
        />
      </TouchableOpacity>
    </BlurView>
  );
};
export default BottomNav;
