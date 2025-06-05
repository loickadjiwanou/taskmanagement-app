import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const HomeStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backgroundBlur: {
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: 30,
    zIndex: 1,
  },
  footer: {
    marginBottom: "10%",
  },
});
export default HomeStyle;
