import { View, Text, Image } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

export default function MessageCard({ name, message, avatarImg }) {
  const tw = useTailwind();
  return (
    <View style={{ ...tw("flex-row p-4 mx-4 my-2 rounded-2xl"), ...shadow }}>
      <View>
        <Image style={tw("w-10 h-10")} source={avatarImg} />
      </View>
      <View style={tw("flex-1 ml-2")}>
        <View style={tw("flex-row justify-between items-center ")}>
          <Text style={tw("text-customBlack  text-center font-InterBold")}>{name}</Text>
          <Text style={tw("text-customPurple py-1 px-3 font-InterBold bg-gray-100 rounded-lg")}>20 Jan</Text>
        </View>
        <Text style={tw("text-customBlack font-Inter text-xs mt-4")}>{message}</Text>
      </View>
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
