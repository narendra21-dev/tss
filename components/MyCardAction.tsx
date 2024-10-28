import React, { useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView, ScrollView, Button } from 'react-native'


import { Dimensions, } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


import { Link, Redirect, router, SplashScreen } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';

import * as WebBrowser from 'expo-web-browser'
import { ClerkLoaded, ClerkProvider, useAuth, useOAuth, useUser } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking'
import { userInfo } from 'os';




const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

var isLogin = false;






// if (!isLoaded) {
//   // Handle loading state however you like
//   console.log("isLoaded -----    " + isLoaded)
//   return <Redirect href={'/(dashborad)/unit4'} />
// }



export const useWarmUpBrowser = () => {


  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience

    console.log("first")

    console.log("isLogin_____" + isLogin)
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}


WebBrowser.maybeCompleteAuthSession();

const MyCardAction = () => {

  const { isSignedIn, user, isLoaded } = useUser()


  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {

    console.log("onPress -----    " + onPress)
    try {
      console.log(" setup 1 startOAuthFlow -----    " + startOAuthFlow)
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(dashborad)', { scheme: 'myapp' }),
      })

      console.log(" setup 2 startOAuthFlow -----    " + startOAuthFlow + "isLogin ---- " + isLogin)
      if (createdSessionId) {
        isLogin = true;
        console.log(" setup 1 createdSessionId -----    " + createdSessionId + "isLogin_______" + isLogin)
        setActive!({ session: createdSessionId })
        console.log(" setup 2 createdSessionId -----    " + createdSessionId + "isLogin_______" + isLogin)
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log(" setup 3 else part -----    " + createdSessionId)
        console.log(" setup 3 else part of signUp -----    " + signUp)
        console.log(" setup 3 else part of signIn -----    " + signIn)

        if (signIn) {
          isLogin = true;
          console.log(" setup 1 signIn to dashborad -----    " + signIn + "isLogin-----" + isLogin)
          router.push('/(dashborad)');
          console.log(" setup 2 signIn to dashborad -----    " + signIn)
        }
        else if (signUp) {
          isLogin = true;
          console.log(" setup 3 signUp to dashborad -----    " + signUp)
          console.log(" setup 3 signUp to dashborad -----    " + signUp)
          router.push('/(auth)/');
        }
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])
  const Tog = () => {
    console.log("isSignedIn -----    " + user?.id)
    router.push('/(main)/');
    // if (user?.id) {
    //   console.log("user?.id -----    " + user?.id)
    //   router.push('/(dashborad)/unit4')
    // }
  }





  return (


    <View style={styles.container1}>
      <View style={styles.container2}>

        <View>
          <Image style={styles.card} source={require('../assets/images/splash.png')} />
        </View>
        <MaskedView
          style={{
            flex: 1, flexDirection: 'row', height: '100%',
            marginTop: -100
          }}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                I Can Exploer {"\n"}
                I Can Fun
              </Text>
            </View>
          }
        >

          {/* Shows behind the mask, you can put anything here, such as an image */}
          <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />


        </MaskedView>
        <TouchableOpacity onPress={() => {
          console.log("hello tuch");
          onPress();
          console.log("hello tuch 22");
        }}
          style={{
            alignSelf: 'center', marginVertical: 50
          }}
        >
          <View pointerEvents='none' style={styles.button}>
            <FontAwesome.Button
              name="google"
              backgroundColor='#28282B'
              size={50}
            >
              Sign in with Google
            </FontAwesome.Button>
          </View>
        </TouchableOpacity>

        <Text style={{ color: 'white' }} onPress={Tog}>
          goto
        </Text>
      </View>
    </View>


  );
};

export default MyCardAction

const styles = StyleSheet.create({
  container1: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 8,
  },
  card: {
    marginTop: -80,
    backgroundColor: 'transparent',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },

  button: {

    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'blue',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',

  },
  tuchableLogin: {
    opacity: 0.2,
  }

});


