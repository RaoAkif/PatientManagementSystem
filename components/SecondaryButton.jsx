import React from 'react'
import { View, Text } from "react-native-web";
import { useTailwind } from "tailwind-rn";

const SecondaryButton = ({buttonText}) => {
  const tw = useTailwind();
  return (
    <View style={tw("border-indigo-500 border-2 w-4/5 py-5 rounded-2xl")} accessibilityLabel='Learn more'>
      <Text style={tw("text-indigo-500  text-center")}>
        {buttonText}
      </Text>
    </View>
  );
};

export default SecondaryButton