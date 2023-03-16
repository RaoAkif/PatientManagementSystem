import { View, Text, Image } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Feather } from "@expo/vector-icons";

export default function SettingsOptions({ name, icon }) {
  const tw = useTailwind();
  return (
    <View style={tw("flex-row items-center mb-10")}>
      <Feather name={icon} size={28} color="#0D3F67" />
      <Text style={tw(" font-InterBold text-customBlack ml-3")}>{name}</Text>
    </View>
  );
}
