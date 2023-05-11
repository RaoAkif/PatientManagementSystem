import React from "react";
import { View, Text, Image, ActivityIndicator, TextInput } from "react-native";
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
      <View style={tw.style("flex flex-1 flex-col  p-5 pt-10 bg-white items-center")}>
        <View style={tw.style("flex flex-row items-center ")}>
          <MaterialIcons name="menu" size={28} color="black" />
          <Text style={tw.style("text-xl flex-1 px-4 font-bold text-gray-800")}>Hi, {user.data.first_name}</Text>
          <Image style={tw.style("w-7 h-7")} source={profile}></Image>
        </View>
        <Image style={tw.style("mt-4 w-62 ")} source={home_image} resizeMode="contain" />

        <View style={tw.style("w-full rounded-2xl bg-gray-100 my-2 px-5 py-2 ")}>
          <TextInput
            label="CNIC"
            style={tw.style(" text-base text-customBlack font-Inter pl-6")}
            placeholder="Search Diseases"
            placeholderTextColor="#0D3F6780"
          />
          <MaterialIcons style={tw.style("absolute ml-2 top-2")} name="search" size={28} color="gray" />
        </View>
      </View>
    );
  }
}
