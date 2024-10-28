import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import CardView from '@/components/CardView'

import React, {useState, useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';




// // Create a Context to manage tab bar visibility
// const TabBarVisibilityContext = createContext();

// // Custom Hook to access the context
// const useTabBarVisibility = () => useContext(TabBarVisibilityContext);

// const Tab = createBottomTabNavigator();


const dashborad = () => {

  return (

    <SafeAreaView>

      <ScrollView style={{
        backgroundColor: 'black'
      }}>

        <View style={{ marginTop: StatusBar.currentHeight }}>

          <CardView question={"What is react native ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api  "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"React Native is an open-source framework, meaning it's free for public use. It contains resources like pre-built components, libraries, and reference material. Like the framework of a home, React Native provides the basic structure of an application."} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?"} />


        </View>


      </ScrollView>
    </SafeAreaView>


  )
}

export default dashborad

const styles = StyleSheet.create({
  container: {
    // flex:1
  }
})

