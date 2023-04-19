import { useRouter } from "expo-router";
import { View, Text, Platform, SafeAreaView, ScrollView } from "react-native";
import tw from "../utils/tailwind";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryInput from "../components/PrimaryInput";
import { Controller, useForm } from "react-hook-form";
import { useRegisterMutation } from "../utils/slices/apiSlice";

export default function SignUp() {
  const router = useRouter();
  const [registerCall, { error, data, isSuccess, isLoading }] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      cnic: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData) => registerCall(formData);
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
            {error && <Text style={tw`text-red-400`}>Something Went Wrong</Text>}
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  label="First Name"
                  placeholder="Your First Name"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="firstName"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  label="Last Name"
                  placeholder="Your Last Name"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  label="CNIC"
                  placeholder="00000-0000000-0"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="cnic"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  label="Email"
                  placeholder="eg. yourname@example.com"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  secureTextEntry
                  label="Password"
                  placeholder="Type your password"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="password"
            />

            <PrimaryButton buttonText="Sign Up" href="/SignIn" onPress={handleSubmit(onSubmit)} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
