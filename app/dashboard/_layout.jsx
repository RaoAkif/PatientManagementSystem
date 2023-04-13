import { Slot, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarStyle: { backgroundColor: "white", borderTop: 2, borderColor: "#0D3F67" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="home" size={28} color="#0D3F67" />,
        }}
      />
      <Tabs.Screen
        name="Appointments"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <MaterialCommunityIcons name="stethoscope" size={28} color="#0D3F67" />,
        }}
      />

      <Tabs.Screen
        name="Messages"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="mail" size={28} color="#0D3F67" />,
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="settings" size={28} color="#0D3F67" />,
        }}
      />

      <Tabs.Screen
        name="MyProfile"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
