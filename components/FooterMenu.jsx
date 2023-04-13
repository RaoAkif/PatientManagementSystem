import React from "react";
import { View, Image } from "react-native";
import tw from "../utils/tailwind";

export default function FooterMenu() {
  return (
    <View style={tw.style("flex flex-row justify-between m-5 items-center")}>
      <View style={tw.style("bg-white p-2 rounded-2xl")}>
        <Image style={tw.style("w-7 h-7")} source={require("../assets/images/home.png")} />
      </View>
      <Image style={tw.style("w-7 h-7")} source={require("../assets/images/calender.png")} />
      <Image style={tw.style("w-7 h-7")} source={require("../assets/images/mail.png")} />
      <Image style={tw.style("w-7 h-7")} source={require("../assets/images/setting.png")} />
    </View>
  );
}
