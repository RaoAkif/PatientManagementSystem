import { View, Text, TextInput, SafeAreaView, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const tw = useTailwind();
  const router = useRouter;
  return (
    <SafeAreaView style={tw("flex-1")}>
      <View style={tw("flex-1 flex-col mx-6 mt-12")}>
        <View style={tw("flex flex-row items-center justify-center")}>
          <Pressable onPress={router().back}>
            <FontAwesome5 name="chevron-left" size={24} color="black" />
          </Pressable>
          <Text style={tw("text-customBlack flex-1 text-base font-InterBold text-center")}>Sign In</Text>
        </View>
        <View style={tw("my-16")}>
          <Text style={tw("text-5xl text-customPurple font-bold text-left pb-2")}>PHS</Text>
          <Text style={tw("text-4xl text-customBlack font-bold mt-7 text-left")}>Welcome</Text>
          <Text style={tw("text-4xl text-customBlack font-bold text-left")}>Back!</Text>
        </View>
        <View style={tw("flex items-center")}>
          <View style={tw("w-full rounded-2xl bg-gray-100 my-3")}>
            <TextInput label="CNIC No" style={tw("w-auto px-5 py-5 rounded-2xl")} placeholder="3xxx-xxxxxxx-x" />
          </View>
          <View style={tw("w-full rounded-2xl bg-gray-100 my-3 mb-5")}>
            <TextInput style={tw("px-5 py-5 rounded-2xl")} placeholder="emily@mail.com" />
          </View>
          <PrimaryButton buttonText="Sign In" />
          <View style={tw("mt-5")}>
            <Text style={tw("text-black font-bold")}>Forgot Password?</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
