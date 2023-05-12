import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "../../../utils/tailwind";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import BottomTabHeader from "../../../components/BottomTabHeader";

export default function reportId() {
  const router = useRouter();
  return (
    <View style={tw.style(" flex-1 bg-white pt-10")}>
      <View style={tw.style("px-5")}>
        <BottomTabHeader title="Report" />
      </View>

      <View style={tw.style("flex-row justify-center mt-10 ")}>
        <Text style={tw.style("text-customBlack text-lg font-InterBold")}>Title</Text>
      </View>
      <View style={tw.style("flex-1 mt-8")}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card name="Ultrasound" />
        </ScrollView>
      </View>
    </View>
  );
}

const Card = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ ...tw.style("flex-row p-4 mx-4 my-1 rounded-xl"), ...shadow }}>
      <View style={tw.style("flex-1 flex-row justify-between items-center ml-2")}>
        <Text style={tw.style("text-customBlack  text-base font-InterBold ")}>{name}</Text>
        <AntDesign name="pdffile1" size={28} color="#0D3F67" />
      </View>
    </Pressable>
  );
};

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
