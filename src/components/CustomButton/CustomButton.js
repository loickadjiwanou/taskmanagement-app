import React from "react";
import CustomButtonStyle from "./CustomButton.style.js";
import { Button } from "@rneui/themed";

const CustomButton = (props) => {
  return (
    <Button
      title={props.title}
      titleStyle={[CustomButtonStyle.titleStyle, { color: props.textColor }]}
      buttonStyle={[
        CustomButtonStyle.buttonStyle,
        {
          borderWidth: 1,
          borderRadius: props.borderRadius || 10,
          borderColor: props.borderColor,
          height: props.buttonHeight || 55,
        },
      ]}
      disabled={props.isDisabled}
      color={props.color}
      loading={props.loading}
      onPress={props.handlePress}
    />
  );
};
export default CustomButton;
