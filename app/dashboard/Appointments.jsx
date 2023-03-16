import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import BottomTabHeader from "../../components/BottomTabHeader";
import MessageCard from "../../components/MessageCard";

export default function Appointments() {
  const tw = useTailwind();
  return (
    <View style={tw(" flex-1 bg-white p-5 pt-10")}>
      <BottomTabHeader title="Appointments" />

      <View style={tw("mt-12")}>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </View>
    </View>
  );
}
