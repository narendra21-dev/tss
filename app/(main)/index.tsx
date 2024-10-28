import { View, Text, ScrollView, FlatList, StyleSheet, ActivityIndicator, Animated, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React, { useState, useEffect, useRef } from 'react';


import axios from 'axios';



import * as NavigationBar from "expo-navigation-bar";

import { useAnimatedStyle, withTiming } from 'react-native-reanimated';


import CardView from '@/components/CardView'
import BottmSheetserch from '@/components/BottmSheetserch';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';





const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);
const Tab = createBottomTabNavigator();


const API_URL = 'https://jsonplaceholder.typicode.com/posts';


const Index = () => {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;


  const translateY = scrollY.interpolate({
    inputRange: [0, 100], // Adjust the range based on scroll sensitivity
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });




  useEffect(() => {
    fetchData();
    setLoading(true)
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const bottomSheetRef = useRef(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(modalOpen ? 0.25 : 0.5),
    };
  });

  function onPress() {
    setModalOpen((curr) => !curr);
  }


  return (
    <>
      <StatusBar
        style='light'
        backgroundColor='black'
      />
      <View style={{ backgroundColor: "#28282B", }}>

        {/* 
        <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?  "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?  "} /> */}

        {loading ? (
          <ActivityIndicator style={{ flex: 1, alignSelf: 'center', marginVertical: "100%" }} size="large" color="#12a1cc" />
        ) : (

          <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardView question={item.title}
                answer={item.body} />
            )}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          //   { useNativeDriver: false }
          // )}
          />
        )}
      </View>
    </>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    width: '100%',
    height: '100%',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#fff',
    fontSize: 18,
  },
  fab: {
    flex: 1,
    alignSelf: 'center', alignContent: 'center', alignItems: 'center',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
  },
});




