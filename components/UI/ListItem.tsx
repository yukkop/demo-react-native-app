import { StatusBar } from 'expo-status-bar';
import React, { version } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { gStyles } from '../../styles/style';

export type ListItemProps = {
    title: string
    openPage(name): void
}

export default function ListItem({ title, openPage }: ListItemProps) {
    return (
        <TouchableWithoutFeedback onPress={() => openPage(title)} style={{ height: "100%", width: "100%" }}>
            <View style={styles.container}>
                <Text style={gStyles.text_conteiner}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFE076',
        borderRadius: 25
    }
});