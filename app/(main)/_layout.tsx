import { View, Text, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { Navigator, Slot, Stack, Tabs, useNavigation, } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import BottmSheetserch from '@/components/BottmSheetserch';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens 
import index from '@/app/(main)/index';



const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);


const Tab = createBottomTabNavigator();

const MainStack = () => {



    return (


        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: "black" }}>
            {/* <StatusBar
                barStyle={'dark-content'}
                backgroundColor='black'

            /> */}

            <Tabs screenOptions={{
                tabBarActiveTintColor: '#12a1cc', headerShown: false,
                tabBarStyle: { backgroundColor: '#28282B', borderTopWidth: 0 },
            }}>

                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'index',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }} />
                <Tabs.Screen
                    name="dashborad"
                    options={{
                        title: 'dashborad',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }} />
                <Tabs.Screen
                    name="qna"
                    options={{
                        title: '<QA/>',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }} />
                <Tabs.Screen
                    name="(dashborad)"
                    options={{
                        title: 'New',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }} />
            </Tabs>
        </SafeAreaView>

    )
}

export default MainStack;

