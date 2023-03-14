import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'

export default function Onboarding() {
  const tw = useTailwind()
    return (
    <View style={tw('flex flex-1 items-center justify-center')}>
      <Text style={tw('text-red-600')}>Onboarding</Text>
    </View>
  )
}