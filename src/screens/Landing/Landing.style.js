import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const LandingStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  landingImage: {
    width: "60%",
    height: "50%",
    alignSelf: "center",
    top: "20%",
  },
  container: {
    position: "absolute",
    paddingHorizontal: 20,
    paddingTop: 110,
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 38,
    fontFamily: "FredokaRegular",
    color: colors.black,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  blurContainer: {
    padding: 20,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
    marginTop: "110%",
    width: "90%",
    alignSelf: "center",
  },
  title1: {
    fontSize: 24,
    fontFamily: "FredokaRegular",
    color: colors.white,
    textAlign: "center",
  },
  title2: {
    fontSize: 14,
    paddingVertical: 10,
    fontFamily: "FredokaRegular",
    color: colors.mainextralight,
    textAlign: "center",
  },
});
export default LandingStyle;
