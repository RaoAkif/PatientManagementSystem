import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../../utils/tailwind";

export default function Dashboard() {
  return (
    <View style={tw.style("flex flex-1 flex-col justify-between p-5 pt-10 bg-white")}>
      <View style={tw.style("flex flex-row justify-between")}>
        <Image style={tw.style("w-7 h-7")} source={require("../../assets/images/navicon.png")}></Image>
        <Text style={tw.style("text-xl font-bold text-gray-800")}>Hi, John</Text>
        <Image style={tw.style("w-7 h-7")} source={require("../../assets/images/profile.png")}></Image>
      </View>
    </View>
  );
}
