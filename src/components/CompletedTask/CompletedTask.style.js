import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const CompletedTaskStyle = StyleSheet.create({
  view: {
    backgroundColor: colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 6,
    overflow: "hidden",
  },
  text: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "FredokaRegular",
    color: colors.black,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontFamily: "FredokaRegular",
    color: colors.black,
    width: 300,
  },
  icon: {
    justifyContent: "center",
    backgroundColor: colors.black,
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 50,
  },
  modal: {
    justifyContent: "center",
    alignSelf: "center",
    bottom: Platform.OS === "ios" ? -20 : 0,
    position: "absolute",
    width: "100%",
  },
  modalContent: {
    backgroundColor: colors.white,
    height: hp("94%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    width: "100%",
    alignSelf: "center",
  },
  modalBar: {
    borderBottomWidth: 6,
    borderBottomColor: colors.lightgray,
    width: 60,
    borderRadius: 30,
    alignSelf: "center",
    top: -5,
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  closeIcon: {
    backgroundColor: colors.beige,
    padding: 12,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    backgroundColor: colors.beige,
    padding: 12,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CompletedTaskStyle;
