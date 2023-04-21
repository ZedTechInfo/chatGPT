import React, { useState } from "react";
import { Button, StyleSheet, Platform, View, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";
import { sendRequest } from "../../api/open_ai";
import { colors } from "../../utils";

export default function ChatScreen() {
    const [inputText, setInputText] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleTextInput = (text) => {
        setInputText(text)
    };
    const handleSendButton = () => {
        setChatMessages([
            ...chatMessages, { type: 'user', messsage: inputText},
        ]);
        const botMessage = sendRequest(inputText);
        setChatMessages([
            ...chatMessages,
            { type: 'bot', messsage: botMessage}
        ]);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                {chatMessages.map((chat, index) => (
                <View
                    key={index}
                    style={[
                    styles.chatBubble,
                    chat.type === 'user' ? styles.userBubble : styles.botBubble,
                    ]}
                >
                    <Text>{chat.message}</Text>
                </View>
                ))}
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={handleTextInput}
                value={inputText}
                />
                <Button
                onPress={handleSendButton}
                title="Send"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.myGrey
    },
    text: {
        color: colors.black
    },
    inputBox: {
        height: 40,
        borderColor: colors.darkGrey,
        borderWidth: 2
    },
    chatBubble: {
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    userBubble: {
        backgroundColor: '#ccf2ff',
        alignSelf: 'flex-end',
    },
    botBubble: {
        backgroundColor: '#e6ffe6',
        alignSelf: 'flex-start',
    }
});