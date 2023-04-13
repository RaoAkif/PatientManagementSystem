import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../../utils/tailwind";

export default function MyProfile() {
  return (
    <View style={tw.style("my-10 mx-5")}>
      <View>
        <Image
          style={tw.style("w-7 h-7 absolute top-2 -ml-2")}
          source={require("../../assets/images/chevron_left.png")}
        />
        <Text style={tw.style("text-3xl font-bold text-gray-800 ml-5 text-center")}>My Profile</Text>
      </View>
      <View style={tw.style("flex flex-col items-center justify-between mt-16")}>
        <Image style={tw.style("w-20 h-20")} source={require("../../assets/images/profile.png")} />
        <View style={tw.style("flex flex-row items-center pt-5")}>
          <Text style={tw.style("text-2xl font-bold text-gray-800 ml-5 mr-5")}>Emily Robertson</Text>
          <Image style={tw.style("w-7 h-7")} source={require("../../assets/images/edit.png")} />
        </View>
        <View style={tw.style("flex flex-row items-center pt-5")}>
          <Image style={tw.style("w-7 h-7")} source={require("../../assets/images/map.png")} />
          <Text style={tw.style("text-xl font-bold text-gray-800 ml-5")}>Florida, US</Text>
        </View>
      </View>
      <View style={tw.style("flex flex-row justify-between items-baseline mt-5")}>
        <View style={tw.style("flex flex-col items-center justify-center pt-8")}>
          <Image style={tw.style("w-10 h-10")} source={require("../../assets/images/calender.png")} />
          <Text style={tw.style("text-xl font-bold text-gray-800 mt-2")}>$2,346</Text>
          <Text style={tw.style("text font-bold text-gray-400 mt-2")}>Appointments</Text>
        </View>
        <View style={tw.style("flex flex-col items-center justify-center pt-5")}>
          <Image style={tw.style("w-10 h-10")} source={require("../../assets/images/clock.png")} />
          <Text style={tw.style("text-xl font-bold text-gray-800 mt-2")}>14,560</Text>
          <Text style={tw.style("text font-bold text-gray-400 mt-2")}>Hours</Text>
        </View>
        <View style={tw.style("flex flex-col items-center justify-center pt-5")}>
          <Image style={tw.style("w-10 h-10")} source={require("../../assets/images/credit-card.png")} />
          <Text style={tw.style("text-xl font-bold text-gray-800 mt-2")}>$2,346</Text>
          <Text style={tw.style("text font-bold text-gray-400 mt-2")}>Spending</Text>
        </View>
      </View>
      <View style={tw.style("w-5/5 p-5 mt-10 border border-gray-100 drop-shadow-sm rounded-2xl")}>
        <View>
          <View style={tw.style("flex flex-row justify-between")}>
            <Text style={tw.style("text-2xl font-bold text-gray-800 mt-2")}>Personal Info</Text>
            <View
              style={tw.style("border-customPurple border-2 w-2/6 py-2 my-1 rounded-3xl")}
              accessibilityLabel="Learn more"
            >
              <Text style={tw.style("text-customPurple font-bold text-center font-Inter text-base")}>Change</Text>
            </View>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Phone Number</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>+1 456 876 323</Text>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Email</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>emily@email.com</Text>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Gender</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>Male</Text>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Date of Birth</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>23 August 1992</Text>
          </View>
        </View>
        <View style={tw.style("mt-10")}>
          <View style={tw.style("flex flex-row justify-between")}>
            <Text style={tw.style("text-2xl font-bold text-gray-800 mt-2")}>Medical Info</Text>
            <View
              style={tw.style("border-customPurple border-2 w-2/6 py-2 my-1 rounded-3xl")}
              accessibilityLabel="Learn more"
            >
              <Text style={tw.style("text-customPurple font-bold text-center font-Inter text-base")}>Change</Text>
            </View>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Illness</Text>
            <View style={tw.style("flex flex-row justify-between mt-2")}>
              <Text style={tw.style("font-bold font-Inter text-customPurple py-1 px-2 bg-gray-200 rounded-lg")}>
                Migraine
              </Text>
              <Text style={tw.style("font-bold font-Inter text-customPurple py-1 px-2 bg-gray-200 rounded-lg")}>
                Asthama
              </Text>
              <Text style={tw.style("font-bold font-Inter text-customPurple py-1 px-2 bg-gray-200 rounded-lg")}>
                Low Blood Sugar
              </Text>
            </View>
          </View>
          <View style={tw.style("flex flex-col justify-between mt-2")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Medical Record</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>medical_record.pdf</Text>
          </View>
          <View style={tw.style("flex flex-col justify-between")}>
            <Text style={tw.style("text-xl text-gray-800 mt-2")}>Emergency Contact</Text>
            <Text style={tw.style("text-xl text-gray-800 font-bold font-Inter")}>+1 456 876 323</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
