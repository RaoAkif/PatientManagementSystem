import { View, Text, SafeAreaView } from "react-native";
import tw from "../utils/tailwind";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Onboarding() {
  return (
    <SafeAreaView style={tw.style("flex-1 bg-white")}>
      <View style={tw.style("flex flex-1 items-center mb-6 mx-6 ")}>
        <View style={tw.style("w-full flex-col flex-1 justify-center")}>
          <Text style={tw.style("text-4xl text-customBlack font-extrabold text-center")}>Consult</Text>
          <Text style={tw.style("text-4xl text-customBlack font-extrabold text-center")}>from Home</Text>
          <Text style={tw.style("text-xl text-customBlack text-center my-5")}>
            Make you doctor appointment as easy as post a status from your Facebook.
          </Text>
        </View>
        <PrimaryButton buttonText="Get Started" href="/SignUp" />
        <SecondaryButton buttonText="Sign In" href="/SignIn" />
      </View>
    </SafeAreaView>
  );
}
