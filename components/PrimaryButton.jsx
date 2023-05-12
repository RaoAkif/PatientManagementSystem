import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import tw from "../utils/tailwind";
import { TouchableRipple } from "react-native-paper";

const PrimaryButton = ({ buttonText, href, onPress }) => {
  const router = useRouter();
  return (
    // <Link href={href} asChild>
    <TouchableRipple
      rippleColor="rgba(0, 0, 0, .32)"
      onPress={onPress ? onPress : () => router.push(href)}
      style={tw.style("bg-customPurple w-full py-5 my-2 rounded-2xl")}
      accessibilityLabel="Learn more"
    >
      <Text style={tw.style("text-white text-center font-Inter text-base")}>{buttonText}</Text>
    </TouchableRipple>
    // </Link>
  );
};

export default PrimaryButton;
