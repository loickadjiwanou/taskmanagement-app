import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Modal,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CompletedTaskStyle from "./CompletedTask.style.js";
import colors from "../../assets/colors/colors.js";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

const CompletedTask = ({ data, onModalChange }) => {
  const theme = useColorScheme();
  const [taskModal, setTaskModal] = useState(false);

  const handleTaskModal = () => {
    setTaskModal(!taskModal);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    onModalChange(taskModal ? null : data);
  };

  const renderTaskModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={taskModal}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setTaskModal(false);
          onModalChange(null);
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: 100,
          }}
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

            {/* Contenu du modal pour les tâches complétées */}
            <ScrollView
              style={{ flex: 1, padding: 20 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: colors.black,
                    marginBottom: 10,
                  }}
                >
                  {data.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.black,
                    lineHeight: 22,
                  }}
                >
                  {data.description}
                </Text>
              </View>

              {/* Indicateur de tâche complétée */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#e8f5e8",
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              >
                <AntDesign name="checkcircle" size={24} color="#4caf50" />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    color: "#4caf50",
                    fontWeight: "600",
                  }}
                >
                  Tâche terminée
                </Text>
              </View>

              {/* Informations supplémentaires */}
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.black,
                    marginBottom: 5,
                  }}
                >
                  Horaire: {data.time}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.black,
                    marginBottom: 5,
                  }}
                >
                  Récurrence: {data.delay}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.black,
                  }}
                >
                  Durée: {data.hour}
                </Text>
              </View>

              {/* Plan si disponible */}
              {data.plan && data.plan.length > 0 && (
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: colors.black,
                      marginBottom: 10,
                    }}
                  >
                    Plan exécuté
                  </Text>
                  {data.plan.map((plan) => (
                    <View
                      key={plan.id}
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: 15,
                        borderRadius: 8,
                        marginBottom: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.black,
                          marginBottom: 5,
                        }}
                      >
                        {plan.content}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#666",
                        }}
                      >
                        {plan.time}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </ScrollView>
          </View>
        </SafeAreaView>
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
