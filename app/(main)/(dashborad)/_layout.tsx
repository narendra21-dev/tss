import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import hello from './hello';
import index from '.';
import unit3 from './unit3';
import unit4 from './unit4';
import unit5 from './unit5';
import unit1 from './unit1';

import { Header } from 'react-native/Libraries/NewAppScreen';




const Tab = createMaterialTopTabNavigator();

const _layout = () => {
  return (




    <>
      <View style={{ flex: 1, backgroundColor: '28282B' }}>

        <Tab.Navigator screenOptions={{
          tabBarPressColor: '#12a1cc',
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: '#12a1cc',
          tabBarInactiveTintColor: '#28282B',
          tabBarIndicatorStyle: { backgroundColor: '#12a1cc', height: 3 },

          tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' },
          tabBarStyle: { backgroundColor: 'black' }
        }}>
          <Tab.Screen name="Home" component={index} />
          <Tab.Screen name="Settings" component={hello} />
          <Tab.Screen name="unit3" component={unit3} />
          <Tab.Screen name="unit4" component={unit4} />
          <Tab.Screen name="unit5" component={unit5} />
          <Tab.Screen name="unit1" component={unit1} />

        </Tab.Navigator>
      </View>

    </>




  )
}

export default _layout