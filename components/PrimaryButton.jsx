import React from "react";
import { View, Text } from "react-native-web";
import { useTailwind } from "tailwind-rn";

const PrimaryButton = ({ buttonText }) => {
  const tw = useTailwind();
  return (
    <View style={tw("bg-indigo-500 w-4/5 py-5 rounded-2xl")} accessibilityLabel='Learn more'>
      <Text style={tw("text-white text-center")}>
        {buttonText}
      </Text>
    </View>
  );
};

export default PrimaryButton;
