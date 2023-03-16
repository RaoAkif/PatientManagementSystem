import { View, Text, Pressable } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function BottomTabHeader({ title }) {
  const tw = useTailwind();
  const router = useRouter();

  return (
    <View style={tw("flex-row items-center")}>
      <Pressable onPress={router.back} style={{ ...tw("py-1 px-2 rounded-2xl"), ...shadow }}>
        <Feather name="chevron-left" size={30} color="#0D3F67" />
      </Pressable>
      <Text style={tw("text-3xl font-InterBold text-customBlack ml-5")}>{title}</Text>
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
