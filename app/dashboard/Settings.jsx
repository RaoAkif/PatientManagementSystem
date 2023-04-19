import React from "react";
import { View } from "react-native";
import SettingsOptions from "../../components/SettingsOptions";
import tw from "../../utils/tailwind";
import BottomTabHeader from "../../components/BottomTabHeader";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/slices/authSlice";

export default function Settings() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <View style={tw.style(" flex-1 bg-white p-5 pt-10")}>
      <BottomTabHeader title="Settings" />

      <View style={tw.style("mt-16")}>
        <SettingsOptions name="Profile" icon="user" onPress={router.back} />
        <SettingsOptions name="Payment Account" icon="credit-card" onPress={router.back} />
        <SettingsOptions name="Notification" icon="bell" onPress={router.back} />
        <SettingsOptions name="Invite Friends" icon="user-plus" onPress={router.back} />
        <SettingsOptions name="Support" icon="help-circle" onPress={router.back} />
        <SettingsOptions name="Terms & Policies" icon="file-text" onPress={router.back} />
        <SettingsOptions name="Logout" icon="log-out" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
}
