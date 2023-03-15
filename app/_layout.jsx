import React from 'react'
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        'InterRegular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
        'InterBold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
        'InterLight': require('../assets/fonts/Inter/Inter-Light.ttf'),
        
      });
  return (
    <TailwindProvider utilities={utilities}>
    <Slot />
  </TailwindProvider>
  )
}