import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../utils";

export const focus = () => (
    <SafeAreaView style={styles.container}>
        
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.myGrey
    },
    text: {
        color: colors.black
    }
})