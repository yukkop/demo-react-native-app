import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';
import ListItem from './UI/ListItem';

export type ListContainerProps = {
    content: string[]
    height
}


export default function Item({ content, height }: ListContainerProps) {
    return (
        <View style={[styles.Content, { height: height }]}>
            {
                content.map(current => {
                    return (
                        <ListItem title={current} onPress={() => { alert(current) }} />
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Content: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});