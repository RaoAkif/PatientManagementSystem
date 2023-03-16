import { View, Text, TextInput } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

export default function PrimaryInput({ label, placeholder, secureTextEntry = false }) {
  const tw = useTailwind();
  return (
    <View style={tw("w-full rounded-2xl bg-gray-100 my-2 px-5 py-2")}>
      <Text style={tw("text-xs text-customBlack font-InterBold mb-1")}>{label}</Text>
      <TextInput
        label="CNIC"
        style={tw(" text-base mb-2 text-customBlack font-Inter")}
        placeholder={placeholder}
        placeholderTextColor="#0D3F6780"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
