import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const CalendarWeekStyle = StyleSheet.create({
  view: {
    paddingTop: 55,
    backgroundColor: colors.red,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  top: {
    // marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "FredokaMedium",
    color: colors.white,
  },
  chevron: {
    top: 4,
    left: 5,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  dayContainer: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 15,
  },
  dayLabel: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "FredokaRegular",
  },
  dateLabel: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "FredokaMedium",
    top: 5,
  },
  dateBack: {
    backgroundColor: colors.white,
    borderRadius: 30,
  },
  dayLabel2: {
    fontSize: 16,
    color: colors.black,
    fontFamily: "FredokaRegular",
  },
  dateLabel2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: "FredokaMedium",
    top: 5,
  },
});
export default CalendarWeekStyle;
