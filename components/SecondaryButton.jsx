import React from 'react'
import { Text, View } from 'react-native';

import { useTailwind } from "tailwind-rn";

const SecondaryButton = ({buttonText}) => {
  const tw = useTailwind();
  return (
    <View style={tw("border-customPurple border-2 w-full py-5 my-2 rounded-2xl")} accessibilityLabel='Learn more'>
      <Text style={tw("text-customPurple text-center font-Inter text-base")}>
        {buttonText}
      </Text>
    </View>
  );
};

export default SecondaryButton