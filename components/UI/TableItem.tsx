import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { gStyles } from '../../styles/style';

export type TableItemProps = {
    result: string
    command: string
}

export default function TableItem({ result, command }: TableItemProps) {

    return (
        <TouchableWithoutFeedback onPress={() => { }} style={{ height: "100%", width: "100%" }}>
            <View style={styles.container}>
                <Text style={[gStyles.text_conteiner, { margin: 10 }]}>{result}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#E7ECF2',
    }
});