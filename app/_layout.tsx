import { View, Text, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, router, Stack } from 'expo-router'
import { useUser } from '@clerk/clerk-expo';
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from 'expo-status-bar';


var aSign = false;

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor='black ' />
      <Stack screenOptions={{ headerShown: false, }} />
      {
        isLogin ? (<Redirect href={"/(main)"} />) : (<Redirect href={"/(auth)/"} />)
      }
    </SafeAreaView>


  );
};

export default RootLayout