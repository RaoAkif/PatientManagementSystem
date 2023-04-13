import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function BottomTabHeader({ title }) {
  const router = useRouter();

  return (
    <View style={tw.style("flex-row items-center")}>
      <Pressable onPress={router.back} style={{ ...tw.style("py-1 px-2 rounded-2xl"), ...shadow }}>
        <Feather name="chevron-left" size={30} color="#0D3F67" />
      </Pressable>
      <Text style={tw.style("text-3xl font-InterBold text-customBlack ml-5")}>{title}</Text>
    </View>
  );
}

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 15,
  backgroundColor: "white",
  elevation: 7,
};
