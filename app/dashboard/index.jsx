import React from "react";
import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import FooterMenu from "../../components/FooterMenu";

export default function Dashboard() {
  const tw = useTailwind();
  return (
    <View style={tw("flex flex-1 flex-col justify-between m-5 mt-10")}>
      <View style={tw("flex flex-row justify-between")}>
        <Image style={tw("w-7 h-7")} source={require("../../assets/images/navicon.png")}></Image>
        <Text style={tw("text-xl font-bold text-gray-800")}>Hi, John</Text>
        <Image style={tw("w-7 h-7")} source={require("../../assets/images/profile.png")}></Image>
      </View>
      <FooterMenu />
    </View>
  );
}
