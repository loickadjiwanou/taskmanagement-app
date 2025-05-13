import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const SettingsStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 55,
    paddingHorizontal: 10,
  },
  backIcon: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.lightgray,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SettingsStyle;
