import { View, Text } from 'react-native'
import React from 'react'
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <TailwindProvider utilities={utilities}>
    <Slot />
  </TailwindProvider>
  )
}