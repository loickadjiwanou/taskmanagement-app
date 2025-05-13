import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useColorScheme,
  ScrollView,
  RefreshControl,
} from "react-native";
import TaskStyle from "./Task.style.js";
import colors from "../../assets/colors/colors.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import avatar from "../../assets/icons/avatar.png";
import Modal from "react-native-modal";
import * as Haptics from "expo-haptics";

const Task = ({ data, onModalChange }) => {
  const theme = useColorScheme();
  const [taskModal, setTaskModal] = useState(false);

  const handleTaskModal = () => {
    setTaskModal(!taskModal);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    onModalChange(data);
  };

  const renderTaskPlan = (plan) => {
    return (
      <View
        style={plan.id === 0 ? TaskStyle.modalPlanFirst : TaskStyle.modalPlan}
      >
        <View style={TaskStyle.modalPlanContent}>
          <Text
            style={
              plan.id === 0
                ? TaskStyle.modalPlanTxt
                : TaskStyle.modalPlanTxtFirst
            }
          >
            {plan?.content}
          </Text>
        </View>
        <View style={TaskStyle.modalPlanTime}>
          <Text
            style={
              plan.id === 0
                ? TaskStyle.modalPlanTimeTxt
                : TaskStyle.modalPlanTimeTxtFirst
            }
          >
            {plan?.time}
          </Text>
        </View>
      </View>
    );
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    setTimeout(() => {
      setRefreshing(false);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    }, 2000);
  };

  const renderTaskModal = () => {
    return (
      <Modal
        isVisible={taskModal}
        onBackdropPress={() => {
          setTaskModal(false);
          onModalChange(null);
        }}
        style={TaskStyle.modal}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        backdropOpacity={0.6}
        backdropColor="black"
      >
        <View style={TaskStyle.modalContent}>
          <View style={TaskStyle.modalBar} />

          <View style={TaskStyle.modalTop}>
            <TouchableOpacity
              onPress={() => {
                setTaskModal(false);
                onModalChange(null);
              }}
              style={TaskStyle.closeIcon}
            >
              <Ionicons name="close" size={30} color={colors.black} />
            </TouchableOpacity>

            <TouchableOpacity style={TaskStyle.editIcon}>
              <Feather name="edit-3" size={30} color={colors.black} />
            </TouchableOpacity>
          </View>

          <ScrollView
            overScrollMode="never"
            vertical
            showsVerticalScrollIndicator={false}
            style={TaskStyle.modalMain}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={colors.lightgray}
                // title={"refreshing..."}
                // titleColor={colors.lightgray}
                progressViewOffset={-15}
              />
            }
          >
            <View style={TaskStyle.modalTaskTxtBox}>
              <Text style={TaskStyle.modalTaskTimeText}>{data.time}</Text>
            </View>

            <View style={TaskStyle.modalTaskTxtBox}>
              <Text style={TaskStyle.modalTaskTitleText}>{data.title}</Text>
            </View>

            <View style={TaskStyle.modalTaskTxtBox}>
              <Text style={TaskStyle.modalTaskDescriptionText}>
                {data.description}
              </Text>
            </View>

            <View style={TaskStyle.modalIcons}>
              {data.avatars === 1 && (
                <View style={TaskStyle.avatarContainerSM}>
                  <Image source={avatar} style={TaskStyle.avatarM} />
                </View>
              )}

              {data.avatars === 2 && (
                <View style={TaskStyle.iconM}>
                  <View style={TaskStyle.avatarContainerM}>
                    <Image source={avatar} style={TaskStyle.avatarM} />
                  </View>
                  <View style={TaskStyle.avatarContainer2M}>
                    <Image source={avatar} style={TaskStyle.avatar2M} />
                  </View>
                </View>
              )}

              {data.avatars > 2 && (
                <View style={TaskStyle.icon3M}>
                  <View style={TaskStyle.avatarContainerM}>
                    <Image source={avatar} style={TaskStyle.avatarM} />
                  </View>
                  <View style={TaskStyle.avatarContainer2M}>
                    <Image source={avatar} style={TaskStyle.avatar2M} />
                  </View>
                  <View style={TaskStyle.avatarContainer2M}>
                    <View style={TaskStyle.avatar2pM}>
                      <Text style={TaskStyle.avatar2pTextM}>
                        +{data.avatars - 2}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>

            {data.plan.length > 0 ? (
              <>
                <Text style={TaskStyle.modalTaskPlanText}>Plan</Text>
                {data.plan.map((plan) => (
                  <View key={plan.id}>{renderTaskPlan(plan)}</View>
                ))}
              </>
            ) : (
              <>
                <Text style={TaskStyle.modalTaskPlanText2}>
                  Nothing to display here !
                </Text>
                <Feather
                  name="alert-circle"
                  size={30}
                  style={TaskStyle.alertIcon}
                />
              </>
            )}
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <View style={TaskStyle.view}>
      <View style={TaskStyle.top}>
        <View style={TaskStyle.text}>
          <Text style={TaskStyle.time}>{data.time}</Text>
          <Text style={TaskStyle.title}>{data.title}</Text>
          <Text style={TaskStyle.description}>{data.delay}</Text>
        </View>

        {data.avatars === 1 && (
          <View style={TaskStyle.iconS}>
            <View style={TaskStyle.avatarContainerS}>
              <Image source={avatar} style={TaskStyle.avatar} />
            </View>
          </View>
        )}

        {data.avatars === 2 && (
          <View style={TaskStyle.icon}>
            <View style={TaskStyle.avatarContainer}>
              <Image source={avatar} style={TaskStyle.avatar} />
            </View>
            <View style={TaskStyle.avatarContainer2}>
              <Image source={avatar} style={TaskStyle.avatar2} />
            </View>
          </View>
        )}

        {data.avatars > 2 && (
          <View style={TaskStyle.icon3}>
            <View style={TaskStyle.avatarContainer}>
              <Image source={avatar} style={TaskStyle.avatar} />
            </View>
            <View style={TaskStyle.avatarContainer2}>
              <Image source={avatar} style={TaskStyle.avatar2} />
            </View>
            <View style={TaskStyle.avatarContainer2}>
              <View style={TaskStyle.avatar2p}>
                <Text style={TaskStyle.avatar2pText}>+{data.avatars - 2}</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={TaskStyle.bottom}>
        <View style={TaskStyle.bottomLeft}>
          <TouchableOpacity style={[TaskStyle.touch, { marginRight: 10 }]}>
            <Text style={TaskStyle.txt}>Today</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[TaskStyle.touch, { paddingHorizontal: 20 }]}
          >
            <Text style={TaskStyle.txt}>1h</Text>
          </TouchableOpacity>
        </View>
        <View style={TaskStyle.bottomRight}>
          <TouchableOpacity onPress={handleTaskModal} style={TaskStyle.iconx}>
            <Feather name="arrow-up-right" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {renderTaskModal()}
    </View>
  );
};

export default Task;
