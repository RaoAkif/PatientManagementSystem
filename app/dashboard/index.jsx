import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import tw from "../../utils/tailwind";
import { useGetCurrentUserQuery } from "../../utils/slices/apiSlice";
import { MaterialIcons } from "@expo/vector-icons";
import home_image from "../../assets/images/home_image.png";
import profile from "../../assets/images/profile.png";
import PrimaryInput from "../../components/PrimaryInput";

export default function Dashboard() {
  const { data: user, isLoading, error } = useGetCurrentUserQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (user) {
    return (
      <View style={tw.style("flex flex-1 flex-col  p-5 pt-10 bg-white")}>
        <View style={tw.style("flex flex-row items-center ")}>
          <MaterialIcons name="menu" size={28} color="black" />
          <Text style={tw.style("text-xl flex-1 px-4 font-bold text-gray-800")}>Hi, {user.data.first_name}</Text>
          <Image style={tw.style("w-7 h-7")} source={profile}></Image>
        </View>
        <Image style={tw.style("mt-4")} source={home_image} />
        <View style={tw.style("justify-center ")}>
          <PrimaryInput style={tw.style("ml-6")} placeholder="Search" />
          <MaterialIcons style={tw.style("absolute ml-2")} name="search" size={28} color="gray" />
        </View>
      </View>
    );
  }
}
