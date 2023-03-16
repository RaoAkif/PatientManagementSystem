import React from 'react'
import { View, Text, Image } from "react-native";
import { useTailwind } from 'tailwind-rn';
import FooterMenu from '../components/FooterMenu';

export default function MyMessages() {
  const tw = useTailwind();
  return (
    <View style={tw('flex flex-1 flex-col justify-between m-5 mt-10')}>
      <View style={tw('flex flex-row items-center')}>
        <View style={tw('border-2 border-gray-100 drop-shadow-sm p-2 rounded-2xl')}>
          <Image style={tw('w-7 h-7')} source={require('../assets/images/chevron_left.png')} />
        </View>
        <Text style={tw('text-3xl font-bold text-gray-800 ml-5 text-center')}>My Profile</Text>
      </View>
      <FooterMenu />
    </View>
  )
}
