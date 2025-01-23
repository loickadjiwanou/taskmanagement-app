import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const BottomNavStyle = StyleSheet.create({
  view: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  item: {
    paddingTop: 32,
    marginHorizontal: 10,
    alignItems: "center",
  },
  middle: {
    width: 120,
    height: 120,
    marginTop: -65,
  },
  itemplus: {
    alignSelf: "center",
    paddingTop: 5,
    marginHorizontal: -15,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    marginTop: -72,
  },
});
export default BottomNavStyle;
