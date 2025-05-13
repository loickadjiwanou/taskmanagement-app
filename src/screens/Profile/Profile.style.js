import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const ProfileStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.black,
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
  header: {
    paddingTop: 55,
    backgroundColor: colors.red,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },
});
export default ProfileStyle;
