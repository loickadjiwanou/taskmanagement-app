import React, { useState } from "react";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import CompletedTaskStyle from "./CompletedTask.style.js";
import colors from "../../assets/colors/colors.js";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import * as Haptics from "expo-haptics";

const CompletedTask = ({ data, onModalChange }) => {
  const theme = useColorScheme();
  const [taskModal, setTaskModal] = useState(false);

  const handleTaskModal = () => {
    setTaskModal(!taskModal);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    onModalChange(data);
  };

  const renderTaskModal = () => {
    return (
      <Modal
        isVisible={taskModal}
        onBackdropPress={() => {
          setTaskModal(false);
          onModalChange(null);
        }}
        style={CompletedTaskStyle.modal}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        backdropOpacity={0.6}
        backdropColor="black"
      >
        <View style={CompletedTaskStyle.modalContent}>
          <View style={CompletedTaskStyle.modalBar} />

          <View style={CompletedTaskStyle.modalTop}>
            <TouchableOpacity
              onPress={() => {
                setTaskModal(false);
                onModalChange(null);
              }}
              style={CompletedTaskStyle.closeIcon}
            >
              <Ionicons name="close" size={30} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity style={CompletedTaskStyle.editIcon}>
              <Feather name="edit-3" size={30} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <TouchableOpacity onPress={handleTaskModal} style={CompletedTaskStyle.view}>
      <View style={CompletedTaskStyle.text}>
        <Text style={CompletedTaskStyle.title}>{data.title}</Text>
        <Text style={CompletedTaskStyle.description}>{data.description}</Text>
      </View>
      <View style={CompletedTaskStyle.icon}>
        <AntDesign name="check" size={24} color={colors.white} />
      </View>
      {renderTaskModal()}
    </TouchableOpacity>
  );
};

export default CompletedTask;
