import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter();
    const onLogin = () =>{
        router.navigate("/signup");
    }
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
  )
}

export default Login