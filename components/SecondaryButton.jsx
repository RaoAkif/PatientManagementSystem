import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { useTailwind } from "tailwind-rn";

const SecondaryButton = ({ buttonText, href }) => {
  const tw = useTailwind();
  return (
    <Link href={href} asChild>
      <Pressable
        style={tw("border-customPurple border-2 w-full py-5 my-2 rounded-2xl")}
        accessibilityLabel="Learn more"
      >
        <Text style={tw("text-customPurple text-center font-Inter text-base")}>{buttonText}</Text>
      </Pressable>
    </Link>
  );
};

export default SecondaryButton;
