import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { gStyles } from '../styles/style';

export type HederProp = {
    title: string
    goBack(): void
}


export default function Header({ goBack, title }: HederProp) {
    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor="transparent" onPress={goBack} style={styles.touchable}>
                <Image style={styles.icon} source={require('./../assets/icon.png')} />
            </TouchableHighlight>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    touchable: {
        justifyContent: 'center',
        height: '60%',
        width: '10%',
        marginRight: 5,
    },
    icon: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: '#323232',
        fontFamily: 'mt-bolt'
    }
});