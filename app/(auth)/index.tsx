import { View, Text, StatusBar, SafeAreaView, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import MyCardAction from '@/components/MyCardAction'
import { ClerkLoaded, ClerkProvider, useClerk, useOAuth, useUser } from '@clerk/clerk-expo';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Redirect, router } from 'expo-router';
import { Sign } from 'crypto';






const Stack = createNativeStackNavigator();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


// const { isSignedIn } = useUser();

// React.useEffect(() => {
//   if (isSignedIn) {
//     router.push('/(dashborad)/unit4');
//   }
// });




const index = () => {

  return (

    <ClerkProvider publishableKey={publishableKey}>
      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
      <MyCardAction />
    </ClerkProvider>
  )
}

export default index

