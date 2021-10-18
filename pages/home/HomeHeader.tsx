import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { gStyles } from './../../styles/style';

export default function HomeHeader() {
    return (
        <View style={styles.Container}>
            <Text style={gStyles.title}>{"This is home page"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '12%',
        width: '100%'
    }
});