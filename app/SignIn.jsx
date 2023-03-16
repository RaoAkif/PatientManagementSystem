import { View, Text, TextInput, SafeAreaView, Pressable, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PrimaryInput from "../components/PrimaryInput";

export default function SignIn() {
  const tw = useTailwind();
  const router = useRouter;
  return (
    <SafeAreaView style={tw("flex-1")}>
      <ScrollView style={tw("flex-1 mx-6 mt-12")} showsVerticalScrollIndicator={false}>
        <View style={tw("flex flex-row items-center justify-center mb-2")}>
          <FontAwesome5 onPress={router().back} name="chevron-left" size={24} color="black" />
          <Text style={tw("text-customBlack flex-1 text-base font-InterBold text-center")}>Sign In</Text>
        </View>

        <View style={tw("my-10 flex-1 flex-col")}>
          <Text style={{ ...tw("text-customPurple font-InterBold"), fontSize: 48 }}>PHS</Text>
          <Text style={tw("text-4xl text-customBlack font-InterBold ")}>Welcome</Text>
          <Text style={tw("text-4xl text-customBlack font-InterBold ")}>Back!</Text>
        </View>

        <View style={tw("flex items-center")}>
          <PrimaryInput label="CNIC" placeholder="00000-0000000-0" />
          <PrimaryInput label="Password" placeholder="Type your password" secureTextEntry />
          <PrimaryButton buttonText="Sign In" href="/Dashboard" />
          <Text style={tw("text-customBlack font-InterBold mt-2")}>Forgot Password?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
