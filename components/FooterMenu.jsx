import React from 'react'
import { View, Image } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function FooterMenu() {
  const tw = useTailwind();
  return (
    <View style={tw('flex flex-row justify-between m-5')}>
      <Image style={tw('w-7 h-7')} source={require('../assets/images/home.png')}></Image>
      <Image style={tw('w-7 h-7')} source={require('../assets/images/calender.png')}></Image>
      <Image style={tw('w-7 h-7')} source={require('../assets/images/mail.png')}></Image>
      <Image style={tw('w-7 h-7')} source={require('../assets/images/setting.png')}></Image>
    </View>
  )
}
