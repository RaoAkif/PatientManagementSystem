import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "../../../utils/tailwind";
import BottomTabHeader from "../../../components/BottomTabHeader";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FAB } from "react-native-paper";

export default function reports() {
  const router = useRouter();

  return (
    <View style={tw.style(" flex-1 bg-white pt-10")}>
      <View style={tw.style("px-5")}>
        <BottomTabHeader title="Reports" />
      </View>
      <FAB
        icon="plus"
        customSize={46}
        color="white"
        onPress={() => router.push("./reports/newReport")}
        style={tw.style("absolute z-10 bottom-6 right-6 bg-customPurple rounded-xl")}
      />

      <View style={tw.style("flex-1 mt-8")}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card title="Ultrasound" date="30-Feb-2021" onPress={() => router.push("/dashboard/reports/1")} />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="CBC" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
          <Card title="Ultrasound" date="30-Feb-2021" />
        </ScrollView>
      </View>
    </View>
  );
}

const Card = ({ title, date, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ ...tw.style("flex-row p-4 mx-4 my-1 rounded-xl"), ...shadow }}>
      <View style={tw.style("flex-1 flex-row justify-between items-center ml-2")}>
        <View>
          <Text style={tw.style("text-customBlack  text-base font-InterBold ")}>{date}</Text>
          <Text style={tw.style("text-customBlack  font-InterBold")}>{title}</Text>
        </View>

        <Entypo name="chevron-right" size={24} color="#0D3F67" />
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
