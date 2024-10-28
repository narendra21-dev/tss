import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, BackHandler, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';

import BottomSheet, {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
    BottomSheetBackdrop,
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import axios from 'axios';
import {
    ScrollView,
    FlatList,
    GestureHandlerRootView
} from 'react-native-gesture-handler';

// Gemini API_KEY
const API_KEY = "AIzaSyCRI43ifA8NWyYka57V2UgxC1Vy8VHCzFs";

const BottmSheetserch = () => {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '95%'], []);



    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [messages, setMessages] = useState<any[]>([]);   // Array to store chat messages
    const [input, setInput] = useState("");         // For user input
    const [loading, setLoading] = useState(false);  // For showing loading state
    const [botMessage, setBotMessage] = useState<any[]>([]);
    const [inputHeight, setInputHeight] = useState(40); // Initial height for TextInput
    const flatListRef = useRef(null);


    // Function to send user message and receive response from API
    const fetchBotResponse = async () => {
        if (input.trim()) {
            // Add the user's message to the chat 
            // Add the user's message to the API request
            const messages =
            {
                role: "user",
                parts: { text: input },
            };

            // Add the user's input to the chat
            const userMessages =
            {
                role: "user",
                text: input,
            };



            // const messages = { role: "user", text: input };
            console.log("messages :_________", messages)
            // console.log("usermessages :_________", usermessages)
            console.log("input :_________", input)

            setMessages((prevMessages) => [...prevMessages, userMessages]);

            // Clear the input field and show loading spinner
            setInput('');
            setLoading(true);

            try {
                const response = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
                    {
                        // Send the user input as part of the contents array
                        contents: messages,
                    },
                );

                // Get the bot's response from the API
                const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from API";

                // Add the bot's message to the chat
                const botMessage = { role: 'bot', text: botResponse };
                console.log("botMessage :_________", botMessage)

                setMessages((prevMessages) => [...prevMessages, botMessage]);


            } catch (error: any) {
                // Handle API error
                if (error.response) {
                    // The request was made, but the server responded with a status code outside of the 2xx range
                    console.error('API Response Error:', error.response.data);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something happened in setting up the request
                    console.error('Error setting up request:', error.message);
                }

                const errorMessage = { role: 'bot', text: 'Error: Unable to process request' };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                // Hide loading spinner
                setLoading(false);
            }
        }
    };

    return (

        // <BottomSheetModalProvider>
        <View style={styles.container}>
            {/* <Button
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="black"
            /> */}
            <GestureHandlerRootView>

                <BottomSheet
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}  // Veriable
                    onChange={handleSheetChanges}
                    enablePanDownToClose={true}
                    containerStyle={{ backgroundColor: 'transparent', }}
                    handleIndicatorStyle={{ height: 0 }}
                    backgroundStyle={{ backgroundColor: "#28282B" }}
                // handleStyle={{ display: "none" }}

                >
                    <BottomSheetView style={styles.container}>

                        <Text style={styles.title}>Awesome Bot 🎉</Text>


                        <View style={styles.container}>



                            <FlatList
                                ref={flatListRef}
                                showsVerticalScrollIndicator={false}
                                data={messages}
                                renderItem={({ item }) => (
                                    <View style={[styles.messageBubble, item.role === 'user' ? styles.userBubble : styles.botBubble]}>
                                        <View style={styles.questionContainer}>
                                            <Text style={styles.messageText} >{item.text}</Text>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(_item, index) => index.toString()}
                            // onContentSizeChange={() => {
                            //     flatListRef.current?.scrollToOffset({
                            //         offset: messages.length,
                            //         animated: true,
                            //     });
                            // }}
                            />


                            {loading && <ActivityIndicator size="large" color="#ffffff" />}

                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[styles.input, { height: Math.max(40, inputHeight) }]}
                                    value={input}
                                    onChangeText={setInput}
                                    placeholder="Type a message..."
                                    placeholderTextColor='gray'
                                    onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)} // Adjust height based on content
                                    multiline={true}
                                    showSoftInputOnFocus={true}
                                    autoCorrect={false}
                                    // autoFocus={true}
                                    selectionColor="blue" // Cursor color (WhatsApp green)
                                />
                                {/* <Button title="Send" onPress={fetchBotResponse} /> */}

                                <TouchableOpacity style={styles.button} onPress={() => {
                                    // alert(input);
                                    fetchBotResponse();
                                }}>
                                    <Text style={styles.buttonText}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </View >

    );
};


const styles = StyleSheet.create({
    contentContainer: {
        color: '#28282B',
        backgroundColor: '#28282B',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        flex: 1,

        backgroundColor: 'transparent',
    },
    inputContainer: {
        flexDirection: 'row', // Places input and button in a row
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    input: {
        color: "white",
        flex: 1, // Takes up the remaining space
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginRight: 10, // Adds space between input and button
        fontSize: 16,
    },
    button: {
        backgroundColor: '#12a1cc',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    messageBubble: {
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: '#12a1cc',
        alignSelf: 'flex-end',
    },
    botBubble: {
        backgroundColor: '#1d1d1d',
        alignSelf: 'flex-start',
    },
    messageText: {
        color: "white",
        fontSize: 16,
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },

});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         justifyContent: 'center', // alignItems: 'center'
//         backgroundColor: 'grey',


//     },
//     contentContainer: {
//         color: '#28282B',
//         backgroundColor: '#28282B',
//         flex: 1,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: 'white'

//     },
//     body: {
//         backgroundColor: '#fffcc9',
//         width: '102%',
//         margin: 10
//     },
//     bot: {
//         fontSize: 16
//     },
//     inputp: {
//         borderWidth: 1,
//         borderColor: 'black',
//         width: '90%',
//         height: 60,
//         marginBottom: 10,
//         borderRadius: 10
//     },
//     button: {
//         backgroundColor: 'yellow',
//         width: '90%',
//         height: 60,
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 10
//     },
//     buttonText: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: 'blue'
//     },
//     userMessage: {
//         textAlign: 'right',
//         marginBottom: 10,
//         color: 'blue',
//         fontSize: 16,
//     },
//     botMessage: {
//         textAlign: 'left',
//         marginBottom: 10,
//         color: 'green',
//         fontSize: 16,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//     },
//     chatContainer: {
//         flex: 1,
//         marginBottom: 10,
//     },
// });

export default BottmSheetserch

