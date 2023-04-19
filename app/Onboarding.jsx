import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "../utils/tailwind";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Onboarding() {
  return (
    <SafeAreaView style={tw.style("flex-1  bg-white justify-center items-center")}>
      <View style={tw.style("flex flex-1 items-center my-6 px-6 justify-around w-full")}>
        <Image
          style={tw.style(`h-44 w-44`, { resizeMode: "contain" })}
          source={require("../assets/images/onboarding.png")}
        />
        <View style={tw.style("w-full  justify-center")}>
          <Text style={tw.style("text-4xl text-customBlack font-extrabold text-center")}>Consult</Text>
          <Text style={tw.style("text-4xl text-customBlack font-extrabold text-center")}>from Home</Text>
          <Text style={tw.style("text-xl text-customBlack text-center my-5")}>
            Make you doctor appointment as easy as post a status from your Facebook.
          </Text>
        </View>

        <View style={tw.style(` w-full  items-center `)}>
          <PrimaryButton buttonText="Get Started" href="/SignUp" />
          <SecondaryButton buttonText="Sign In" href="/SignIn" />
        </View>
      </View>
    </SafeAreaView>
  );
}
