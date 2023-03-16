import React from 'react'
import { View, Text, Image } from "react-native";
import { useTailwind } from 'tailwind-rn';
import FooterMenu from '../components/FooterMenu';

export default function MyMessages() {
  const tw = useTailwind();
  return (
    <View style={tw('flex flex-1 flex-col justify-between m-5 mt-10')}>
      <View>
        <View style={tw('flex flex-row items-center')}>
          <View style={tw('border-2 border-gray-100 drop-shadow-sm p-2 rounded-2xl')}>
            <Image style={tw('w-7 h-7')} source={require('../assets/images/chevron_left.png')} />
          </View>
          <Text style={tw('text-3xl font-bold text-gray-800 ml-5 text-center')}>My Messages</Text>
        </View>
        <View style={tw('mt-10')}>
          <View style={tw('flex flex-row')}>
            <View style={tw("w-3/6 py-3 my-2 rounded-3xl bg-white border-2 border-gray-100 -mr-5 z-10")} accessibilityLabel='Learn more'>
              <Text style={tw("text-gray-800 font-bold text-center font-Inter text-base")}>
                Unread(4)
              </Text>
            </View>
            <View style={tw("w-3/6 py-3 my-2 rounded-3xl bg-gray-100 -ml-5")} accessibilityLabel='Learn more'>
              <Text style={tw("text-gray-500 font-bold text-center font-Inter text-base")}>
                Read
              </Text>
            </View>
          </View>
          <View style={tw('flex flex-row border-2 border-gray-100 drop-shadow-sm w-full mt-5 rounded-xl p-2 pr-4')}>
            <Image style={tw('w-12 h-12')} source={require('../assets/images/profile.png')} />
            <View style={tw('flex flex-col ml-4')}>
              <View style={tw('flex flex-row justify-between w-7/12')}>
                <Text style={tw("text-gray-800 font-bold text-center font-Inter")}>Medix Support</Text>
                <Text style={tw("text-violet-800 text-bold font-Inter px-2 py-1 bg-gray-100 rounded-lg")}>20 Jan</Text>
              </View>
              <Text style={tw("text-gray-800 font-Inter text-xs text-justify w-7/12 mt-4")}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          </View>
          <View style={tw('flex flex-row border-2 border-gray-100 drop-shadow-sm w-full mt-5 rounded-xl p-2 pr-4')}>
            <Image style={tw('w-12 h-12')} source={require('../assets/images/profile.png')} />
            <View style={tw('flex flex-col ml-4')}>
              <View style={tw('flex flex-row justify-between w-7/12')}>
                <Text style={tw("text-gray-800 font-bold text-center font-Inter")}>Medix Support</Text>
                <Text style={tw("text-violet-800 text-bold font-Inter px-2 py-1 bg-gray-100 rounded-lg")}>20 Jan</Text>
              </View>
              <Text style={tw("text-gray-800 font-Inter text-xs text-justify w-7/12 mt-4")}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          </View>
          <View style={tw('flex flex-row border-2 border-gray-100 drop-shadow-sm w-full mt-5 rounded-xl p-2 pr-4')}>
            <Image style={tw('w-12 h-12')} source={require('../assets/images/profile.png')} />
            <View style={tw('flex flex-col ml-4')}>
              <View style={tw('flex flex-row justify-between w-7/12')}>
                <Text style={tw("text-gray-800 font-bold text-center font-Inter")}>Medix Support</Text>
                <Text style={tw("text-violet-800 text-bold font-Inter px-2 py-1 bg-gray-100 rounded-lg")}>20 Jan</Text>
              </View>
              <Text style={tw("text-gray-800 font-Inter text-xs text-justify w-7/12 mt-4")}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          </View>
          <View style={tw('flex flex-row border-2 border-gray-100 drop-shadow-sm w-full mt-5 rounded-xl p-2 pr-4')}>
            <Image style={tw('w-12 h-12')} source={require('../assets/images/profile.png')} />
            <View style={tw('flex flex-col ml-4')}>
              <View style={tw('flex flex-row justify-between w-7/12')}>
                <Text style={tw("text-gray-800 font-bold text-center font-Inter")}>Medix Support</Text>
                <Text style={tw("text-violet-800 text-bold font-Inter px-2 py-1 bg-gray-100 rounded-lg")}>20 Jan</Text>
              </View>
              <Text style={tw("text-gray-800 font-Inter text-xs text-justify w-7/12 mt-4")}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <FooterMenu />
    </View>
  )
}
