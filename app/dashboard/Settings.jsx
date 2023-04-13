import React from "react";
import { View } from "react-native";
import SettingsOptions from "../../components/SettingsOptions";
import tw from "../../utils/tailwind";
import BottomTabHeader from "../../components/BottomTabHeader";

export default function Settings() {
  return (
    <View style={tw.style(" flex-1 bg-white p-5 pt-10")}>
      <BottomTabHeader title="Settings" />

      <View style={tw.style("mt-16")}>
        <SettingsOptions name="Profile" icon="user" />
        <SettingsOptions name="Payment Account" icon="credit-card" />
        <SettingsOptions name="Notification" icon="bell" />
        <SettingsOptions name="Invite Friends" icon="user-plus" />
        <SettingsOptions name="Support" icon="help-circle" />
        <SettingsOptions name="Terms & Policies" icon="file-text" />
      </View>
    </View>
  );
}
