import { View, Text } from "react-native";
import { useTailwind } from 'tailwind-rn'

export default function SignIn() {
  const tw = useTailwind();
  return (
    <View style={tw('flex flex-1 items-center justify-center')}>
      <Text style={tw('text-3xl text-red-500')}>SignIn Text 123</Text>
    </View>
  );
}
