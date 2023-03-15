import { View, Text, TextInput } from "react-native";
import { useTailwind } from 'tailwind-rn';
import PrimaryButton from "../components/PrimaryButton";

export default function SignIn() {
  const tw = useTailwind();
  return (
    <View style={tw('h-4/5 flex-col justify-between')}>
      <View>
        <Text style={tw('text-black text-base font-bold mt-10 text-center')}>Sign Up</Text>
      </View>
      <View>
        <Text style={tw('text-5xl text-indigo-500 font-bold text-left ml-5 pb-2')}>PHS</Text>
        <Text style={tw('text-4xl text-gray-800 font-bold mt-7 text-left ml-5')}>Join our healthy<br/>community</Text>
      </View>
      <View style={tw('flex items-center')}>
        <View style={tw('w-4/5 rounded-2xl bg-gray-100 my-3')}>
          <TextInput label="CNIC No" style={tw('w-auto px-5 py-5 rounded-2xl')} placeholder="Emily Robertson" />
        </View>
        <View style={tw('w-4/5 rounded-2xl bg-gray-100 my-3')}>
          <TextInput label="CNIC No" style={tw('w-auto px-5 py-5 rounded-2xl')} placeholder="3xxx-xxxxxxx-x" />
        </View>
        <View style={tw('w-4/5 rounded-2xl bg-gray-100 my-3 mb-8')}>
          <TextInput style={tw('w-auto px-5 py-5 rounded-2xl')} placeholder="emily@mail.com" />
        </View>
        <PrimaryButton buttonText="Sign Up" />
      </View>
    </View>
  );
}
