import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native';
import { BlurView } from 'expo-blur';

import { BlurEffectTypes, } from 'react-native-screens';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const CardView = ({ question, answer }: { question: any, answer: any }) => {
    return (

        <View style={styles.container}>


            <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
                <View style={styles.card}>



                    <View style={styles.questionContainer}>

                        {/* <Text style={styles.question}>{"Q:"}</Text> */}

                        <Text style={styles.question}>{question}</Text>

                    </View>


                    <View style={styles.questionContainer}>
                        {/* <Text style={styles.question}>{"A:"}</Text> */}
                        <Text style={styles.answer}>{answer}</Text>
                    </View>


                </View>
            </BlurView>

        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: '#28282B',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 8,
    },

    card: {
        backgroundColor: 'transparent ',
        padding: 20,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    question: {
        justifyContent: 'space-between',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#12a1cc',


    },
    answer: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    blurContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default CardView;
