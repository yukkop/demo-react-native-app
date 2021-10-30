import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { gStyles } from '../../styles/style';

import ch from '../../resources/content/clever-home-content.json';
import chb from '../../resources/content/clever-home-brightness-content.json';
import chc from '../../resources/content/clever-home-color-content.json';
import chct from '../../resources/content/clever-home-color-temperature-content.json';
import choo from '../../resources/content/clever-home-on-off-content.json';
import l from '../../resources/content/leisure-content.json';
import mo from '../../resources/content/movie-content.json';
import mu from '../../resources/content/music-content.json';
import p from '../../resources/content/phone-content.json';
import r from '../../resources/content/reminder-content.json';
import sh from '../../resources/content/shop-content.json';
import st from '../../resources/content/shop-taxi-content.json';
import sp from '../../resources/content/speak-content.json';

import { items } from '../../resources/content/shop-taxi-content.json'


export default function Search({ navigation }) {

    const data =
        [
            ...ch.items,
            ...chb.items,
            ...chc.items,
            ...chct.items,
            ...choo.items,
            ...l.items,
            ...mo.items,
            ...mu.items,
            ...p.items,
            ...r.items,
            ...sh.items,
            ...st.items,
            ...sp.items
        ]

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <View style={{ marginVertical: 10, alignItems: 'center', width: '100%', }}>
                <View style={{ alignItems: 'flex-start', width: '80%', }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome name="search" size={12} color="#000" style={{ textAlign: 'center' }} />
                        <TextInput
                            style={{ marginLeft: 5, marginRight: 15, textAlign: 'left' }}
                            placeholder="Поиск..."
                            keyboardType="default"
                        />
                    </View>
                    <View style={{ width: '100%', height: 2, backgroundColor: '#000' }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Home: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});