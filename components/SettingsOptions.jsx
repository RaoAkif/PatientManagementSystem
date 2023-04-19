import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "../utils/tailwind";

import { Feather } from "@expo/vector-icons";

export default function SettingsOptions({ name, icon, onPress }) {
  return (
    <Pressable style={tw.style("flex-row items-center mb-10")} onPress={onPress}>
      <Feather name={icon} size={28} color="#0D3F67" />
      <Text style={tw.style(" font-InterBold text-customBlack ml-3")}>{name}</Text>
    </Pressable>
  );
}
