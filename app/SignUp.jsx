import { useRouter } from "expo-router";
import { View, Text, Platform, SafeAreaView, ScrollView } from "react-native";
import tw from "../utils/tailwind";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryInput from "../components/PrimaryInput";

export default function SignUp() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw.style("flex-1 bg-white")}>
      <View style={tw.style(`flex-1 mx-6 ${Platform.OS === "ios" ? "" : "mt-12"}`)}>
        <View style={tw.style("flex flex-row items-center justify-center mb-2")}>
          <FontAwesome5 onPress={router.back} name="chevron-left" size={24} color="black" />
          <Text style={tw.style("text-customBlack flex-1 text-base font-InterBold text-center")}>Sign Up</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw.style("my-8 flex-1 flex-col")}>
            <Text style={{ ...tw.style("text-customPurple font-InterBold"), fontSize: 48 }}>PHS</Text>
            <Text style={tw.style("text-4xl text-customBlack font-InterBold ")}>Join our healthy community</Text>
          </View>
          <View style={tw.style("flex items-center")}>
            <PrimaryInput label="Full Name" placeholder="Your Given Name" />
            <PrimaryInput label="CNIC" placeholder="00000-0000000-0" />
            <PrimaryInput label="Email" placeholder="eg. yourname@example.com" />
            <PrimaryInput label="Password" placeholder="Type your password" secureTextEntry />
            <PrimaryButton buttonText="Sign Up" href="/SignIn" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
