import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from 'react-native';
import { useTailwind } from "tailwind-rn";

const PrimaryButton = ({ buttonText }) => {
  const tw = useTailwind();
  return (
    <Link href='/SignIn' asChild>
    <Pressable style={tw("bg-customPurple w-full py-5 my-2 rounded-2xl")} accessibilityLabel='Learn more'>
      <Text style={tw("text-white text-center font-Inter text-base")}>
        {buttonText}
      </Text>
    </Pressable>
    </Link>
  );
};

export default PrimaryButton;
