import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import CardView from '@/components/CardView';
import { Link } from 'expo-router';
// import { useClerk } from '@clerk/clerk-expo';

const Index = () => {
    // const { signOut } = useClerk();

    return (
        <SafeAreaView>

            <ScrollView style={{
                backgroundColor: 'black'
            }}>

      


                <View>

                    <CardView question={"What is react native ?"}
                        answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? "} />

                    <CardView question={"Few Question which come from server or Api ?"}
                        answer={"Few Answers which come from server or Api  "} />

                    <CardView question={"Few Question which come from server or Api ?"}
                        answer={"React Native is an open-source framework, meaning it's free for public use. It contains resources like pre-built components, libraries, and reference material. Like the framework of a home, React Native provides the basic structure of an application."} />

                    <CardView question={"Few Question which come from server or Api ?"}
                        answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?"} />

                    {/* <Link href={'/(auth)/'} onPress={() => { signOut }} > signOut </Link> */}

                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
export default Index;