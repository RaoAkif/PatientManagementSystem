import { View, Text, Image } from "react-native";
import React from "react";
import tw from "../utils/tailwind";

import { Feather } from "@expo/vector-icons";

export default function SettingsOptions({ name, icon }) {
  return (
    <View style={tw.style("flex-row items-center mb-10")}>
      <Feather name={icon} size={28} color="#0D3F67" />
      <Text style={tw.style(" font-InterBold text-customBlack ml-3")}>{name}</Text>
    </View>
  );
}
