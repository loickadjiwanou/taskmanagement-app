import React, { useState } from "react";
import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  Image,
} from "react-native";
import CalendarWeekStyle from "./CalendarWeek.style.js";
import colors from "../../assets/colors/colors.js";
import { Entypo, Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import * as Haptics from "expo-haptics";
import avatar from "../../assets/icons/avatar.png";

const CalendarWeek = (props) => {
  const theme = useColorScheme();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [month, setMonth] = useState(months[0]);

  const generateWeek = (date) => {
    const startOfWeek = dayjs(date).startOf("week").add(1, "day");
    return Array.from({ length: 7 }).map((_, index) =>
      startOfWeek.add(index, "day")
    );
  };

  const [currentDate, setCurrentDate] = useState(dayjs());
  const [currentWeek, setCurrentWeek] = useState(generateWeek(currentDate));
  const [actualDay, setActualDay] = useState(dayjs());
  const [actualDate, setActualDate] = useState(dayjs());
  const [actualDateUnFormated, setActualDateUnFormated] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("en", { month: "long" });
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} UTC`;

    return {
      day,
      month,
      year,
      time: formattedTime,
      fullDate: formattedDate,
    };
  };

  const handleSetDate = (date) => {
    setSelectedDate(dayjs(date));
    setActualDateUnFormated(dayjs(date));
    setActualDay(dayjs(date).date());
    setActualDate(date);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    const dayName = dayjs(date).format("dddd");
    const value = `${dayName} ${formatDate(date).fullDate}`;
    // console.log("Actual date: ", value);
  };

  const handlePressMenu = () => {
    console.info("menu drawer");
  };

  return (
    <View style={CalendarWeekStyle.view}>
      <View style={CalendarWeekStyle.top}>
        <TouchableOpacity onPress={handlePressMenu}>
          <Feather name="menu" size={34} color={colors.white} />
        </TouchableOpacity>
        <Image source={avatar} style={CalendarWeekStyle.avatar} />
      </View>
      <View style={CalendarWeekStyle.header}>
        <Text style={CalendarWeekStyle.title}>
          {months[currentDate.month()]}
        </Text>
        <Entypo
          name={month ? "chevron-thin-down" : "chevron-thin-up"}
          size={20}
          color={colors.white}
          style={CalendarWeekStyle.chevron}
        />
      </View>

      <View style={CalendarWeekStyle.weekContainer}>
        {days.map((day, index) => (
          <TouchableOpacity
            onPress={() => handleSetDate(currentWeek[index])}
            key={index}
            style={[
              CalendarWeekStyle.dayContainer,
              selectedDate.isSame(currentWeek[index], "day") &&
                CalendarWeekStyle.dateBack,
            ]}
          >
            <Text
              style={[
                CalendarWeekStyle.dayLabel,
                selectedDate.isSame(currentWeek[index], "day") &&
                  CalendarWeekStyle.dayLabel2,
              ]}
            >
              {day}
            </Text>
            <Text
              style={[
                CalendarWeekStyle.dateLabel,
                selectedDate.isSame(currentWeek[index], "day") &&
                  CalendarWeekStyle.dateLabel2,
              ]}
            >
              {currentWeek[index].date()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default CalendarWeek;
