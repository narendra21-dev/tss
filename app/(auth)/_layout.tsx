import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router, SplashScreen, Stack } from 'expo-router'

import { ClerkProvider, ClerkLoaded, SignedOut, useUser } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
    throw new Error(
        'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
}



const AuthStack = () => {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
        </Stack>
    )
}

export default AuthStack





