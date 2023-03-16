import React from 'react'
import { View, Text, Image } from "react-native";
import { useTailwind } from 'tailwind-rn';
import FooterMenu from '../components/FooterMenu';

export default function Dashboard() {
  const tw = useTailwind();
  return (
    <View style={tw('flex flex-1 flex-col')}>
      <View style={tw('flex flex-1 flex-col justify-between m-5 mt-10')}>
        <View>
          <View style={tw('mb-20')}>
            <View style={tw('flex flex-row items-center')}>
              <View style={tw('bg-violet-100 p-2 rounded-2xl')}>
                <Image style={tw('w-7 h-7')} source={require('../assets/images/chevron_left.png')} />
              </View>
              <Text style={tw('text-3xl font-bold text-gray-800 ml-5')}>Setting</Text>
            </View>
          </View>
          <View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/setting.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Profile</Text>
            </View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/credit-card.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Payment Account</Text>
            </View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/notification.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Notification</Text>
            </View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/user-invite.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Invite Friends</Text>
            </View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/support.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Support</Text>
            </View>
            <View style={tw('flex flex-row items-center mb-10')}>
              <View style={tw('p-2 rounded-2xl')}>
                  <Image style={tw('w-7 h-7')} source={require('../assets/images/terms-and-policies.png')} />
              </View>
              <Text style={tw('text font-bold text-gray-800 ml-2')}>Terms and Policies</Text>
            </View>
          </View>
        </View>
        <FooterMenu />
      </View>
    </View>
  )
}
