import { View, Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Onboarding() {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("flex-1")}>
      <View style={tw("flex flex-1 items-center mb-6 mx-6 ")}>
        <View style={tw("w-full flex-col flex-1 justify-center")}>
          <Text style={tw("text-4xl text-customBlack font-extrabold text-center")}>Consult</Text>
          <Text style={tw("text-4xl text-customBlack font-extrabold text-center")}>from Home</Text>
          <Text style={tw("text-xl text-customBlack text-center my-5")}>
            Make you doctor appointment as easy as post a status from your Facebook.
          </Text>
        </View>
        <PrimaryButton buttonText="Get Started" />
        <SecondaryButton buttonText="Sign In" />
      </View>
    </SafeAreaView>
  );
}
