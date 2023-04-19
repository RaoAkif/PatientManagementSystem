import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../utils/tailwind";

export default function PrimaryInput({
  label,
  placeholder,
  secureTextEntry = false,
  onBlur,
  onChange,
  value,
  style = {},
}) {
  return (
    <View style={tw.style("w-full rounded-2xl bg-gray-100 my-2 px-5 py-2 ")}>
      <Text style={tw.style("text-xs text-customBlack font-InterBold mb-1")}>{label}</Text>
      <TextInput
        label="CNIC"
        style={tw.style(" text-base mb-2 text-customBlack font-Inter", { ...style })}
        placeholder={placeholder}
        placeholderTextColor="#0D3F6780"
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}
