import React from "react";
import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import BottomTabHeader from "../../components/BottomTabHeader";
import MessageCard from "../../components/MessageCard";

export default function Messages() {
  const tw = useTailwind();
  return (
    <View style={tw(" flex-1 bg-white p-5 pt-10")}>
      <BottomTabHeader title="Messages" />

      <View style={tw("mt-10")}>
        <View style={tw("flex flex-row")}>
          <View
            style={tw("w-3/6 py-3 my-2 rounded-3xl bg-white border-2 border-gray-100 ml-5 -mr-5 z-10")}
            accessibilityLabel="Learn more"
          >
            <Text style={tw("text-gray-800 font-bold text-center font-Inter text-base")}>Unread(4)</Text>
          </View>
          <View style={tw("w-3/6 py-3 my-2 rounded-3xl bg-gray-100 -ml-5")} accessibilityLabel="Learn more">
            <Text style={tw("text-gray-500 font-bold text-center font-Inter text-base")}>Read</Text>
          </View>
        </View>
        <View>
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </View>
      </View>
    </View>
  );
}
