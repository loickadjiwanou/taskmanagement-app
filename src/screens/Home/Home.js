import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  useColorScheme,
  ScrollView,
  RefreshControl,
  Animated,
} from "react-native";
import HomeStyle from "./Home.style.js";
import landingImage from "../../assets/icons/icon.png";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import colors from "../../assets/colors/colors.js";
import { BlurView } from "expo-blur";
import CompletedTask from "../../components/CompletedTask/CompletedTask.js";
import Task from "../../components/Task/Task.js";
import CalendarWeek from "../../components/CalendarWeek/CalendarWeek.js";
import * as Haptics from "expo-haptics";

const Home = (props) => {
  const theme = useColorScheme();

  const tasks = [
    {
      id: 0,
      title: "One-to-One",
      delay: "Repeats every two weeks",
      time: "12:00-1:00PM",
      hour: "1h",
      avatars: 2,
      completed: true,
      description: "A personal one-to-one meeting.",
      plan: [],
    },
    {
      id: 1,
      title: "One-to-One",
      delay: "Repeats every two weeks",
      time: "12:00-1:00PM",
      hour: "1h",
      avatars: 1,
      completed: false,
      description:
        "A one-on-one session to go over feedback and discuss the next steps for the project.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 1,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 2,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 2,
      title: "Team Meeting",
      delay: "Occurs every Monday",
      time: "9:00-10:00AM",
      hour: "1h",
      avatars: 2,
      completed: false,
      description:
        "A weekly meeting with the entire team to review ongoing projects and upcoming deadlines.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 3,
      title: "Sprint Planning",
      delay: "Occurs every two weeks",
      time: "2:00-3:00PM",
      hour: "1h",
      avatars: 6,
      completed: false,
      description:
        "A planning session to determine the tasks for the next sprint and assign responsibilities.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 1,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 4,
      title: "Client Call",
      delay: "Once a month",
      time: "3:00-4:00PM",
      hour: "1h",
      avatars: 1,
      completed: true,
      description:
        "A monthly call with the client to update them on project status.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 1,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 2,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 5,
      title: "Code Review",
      delay: "Occurs every Friday",
      time: "10:00-11:00AM",
      hour: "1h",
      avatars: 1,
      completed: false,
      description:
        "A code review session where team members provide feedback on each other's work to ensure quality and consistency.",
      plan: [],
    },
    {
      id: 6,
      title: "Team Check-in",
      delay: "Occurs every Wednesday",
      time: "1:00-2:00PM",
      hour: "1h",
      avatars: 3,
      completed: false,
      description:
        "A mid-week check-in to ensure everyone is on track and address any blockers that might have come up.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 7,
      title: "Brainstorming Session",
      delay: "Occurs once a month",
      time: "4:00-5:00PM",
      hour: "1h",
      avatars: 6,
      completed: true,
      description:
        "A creative session to brainstorm new ideas, features, or solutions for upcoming projects.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 8,
      title: "Retrospective",
      delay: "Occurs every two weeks",
      time: "3:00-4:00PM",
      hour: "1h",
      avatars: 5,
      completed: false,
      description:
        "A retrospective meeting to reflect on the completed sprint and discuss what went well and what can be improved.",
      plan: [
        {
          id: 0,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
        {
          id: 1,
          content: "Discuss the next steps for the project.",
          time: "1:00-1:30",
        },
      ],
    },
    {
      id: 9,
      title: "Training Session",
      delay: "Once a quarter",
      time: "11:00-12:00PM",
      hour: "1h",
      avatars: 8,
      completed: false,
      description:
        "A training session to learn new tools, techniques, or frameworks relevant to the team's work.",
      plan: [],
    },
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    setTimeout(() => {
      setRefreshing(false);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    }, 2000);
  };

  const [modalDisplayed, setModalDisplayed] = useState(false);

  const handleModalState = (data) => {
    if (data) {
      setModalDisplayed(true);
    } else {
      setModalDisplayed(false);
    }
  };

  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: modalDisplayed ? 0.88 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [modalDisplayed]);

  return (
    <Animated.View
      style={[
        HomeStyle.view,
        {
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      <BlurView intensity={20} tint="dark" style={HomeStyle.backgroundBlur}>
        <CalendarWeek />
      </BlurView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.white}
          />
        }
      >
        {tasks.map(
          (task) =>
            task.completed && (
              <CompletedTask
                key={task.id}
                data={task}
                onModalChange={handleModalState}
              />
            )
        )}

        {tasks.map(
          (task) =>
            !task.completed && (
              <Task
                key={task.id}
                data={task}
                onModalChange={handleModalState}
              />
            )
        )}

        <View style={HomeStyle.footer} />
      </ScrollView>

      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </Animated.View>
  );
};
export default Home;
