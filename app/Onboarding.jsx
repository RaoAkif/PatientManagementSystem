import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";


export default function Onboarding() {
  const tw = useTailwind();
  return (
    <View style={tw("flex flex-1 items-center ")}>
      <View style={tw("w-3/5")}>
        <Text style={tw("text-4xl pt-96 text-gray-800 font-extrabold text-center")}>Consult<br /> from Home</Text>
        <Text style={tw("text-xl text-gray-800 text-center my-5")}>Make you doctor appointment as easy as post a status from your Facebook.</Text>
      </View>
      <PrimaryButton buttonText="Get Started" />
      <br />
      <SecondaryButton buttonText="Sign In" />
    </View>
  );
}
