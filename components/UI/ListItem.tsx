import { StatusBar } from 'expo-status-bar';
import React, { version } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { gStyle } from '../../styles/style';

export type ListItemProps = {
    title: string
    text: string
    openPage(): void
}

export default function ListItem({ title, openPage }: ListItemProps) {
    return (
        <TouchableWithoutFeedback onPress={openPage} style={{ height: "100%", width: "100%" }}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#E7ECF2'
    },
    text: {
        textAlign: 'center'
    }
});