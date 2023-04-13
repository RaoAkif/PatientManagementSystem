import { View, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import tw from "../utils/tailwind";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { useLoginMutation } from "../utils/slices/apiSlice";
import { useDispatch } from "react-redux";
import { login } from "../utils/slices/authSlice";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginCall, { error, data, isSuccess, isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (formData) => loginCall(formData);

  useEffect(() => {
    // console.log(data);
    if (data) {
      dispatch(login(data.data.access_token));
    }
  }, [data]);

  return (
    <SafeAreaView style={tw.style("flex-1 bg-white")}>
      {isLoading ? (
        <View style={tw`my-auto`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          style={tw.style(`flex-1 mx-6 ${Platform.OS === "ios" ? "" : "mt-12"}`)}
          showsVerticalScrollIndicator={false}
        >
          <View style={tw.style("flex flex-row items-center justify-center mb-2")}>
            <FontAwesome5 onPress={router.back} name="chevron-left" size={24} color="black" />
            <Text style={tw.style("text-customBlack flex-1 text-base font-InterBold text-center")}>Sign In</Text>
          </View>

          <View style={tw.style("my-10 flex-1 flex-col")}>
            <Text style={{ ...tw.style("text-customPurple font-InterBold"), fontSize: 48 }}>PHS</Text>
            <Text style={tw.style("text-4xl text-customBlack font-InterBold ")}>Welcome</Text>
            <Text style={tw.style("text-4xl text-customBlack font-InterBold ")}>Back!</Text>
          </View>

          {/* INPUTS */}

          <View style={tw.style("flex items-center")}>
            {error && <Text style={tw`text-red-400`}>Incorrect username and Password</Text>}
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PrimaryInput
                  label="Email"
                  placeholder="enter your email"
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
                  label="Password"
                  placeholder="enter your password"
                  secureTextEntry
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="password"
            />

            <PrimaryButton buttonText="Sign In" href="/dashboard" onPress={handleSubmit(onSubmit)} />
            <Text style={tw.style("text-customBlack font-InterBold mt-2")}>Forgot Password?</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
