import { View, Text } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import BottomTabHeader from "../../components/BottomTabHeader";
import MessageCard from "../../components/MessageCard";

export default function Appointments() {
  return (
    <View style={tw.style(" flex-1 bg-white p-5 pt-10")}>
      <BottomTabHeader title="Appointments" />

      <View style={tw.style("mt-12")}>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </View>
    </View>
  );
}
