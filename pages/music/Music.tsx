import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { gStyles } from '../../styles/style';
import TableItem from '../../components/UI/TableItem';
import Header from '../../components/Header';

import { items } from '../../resources/music-content.json'


export default function Music({ navigation }) {
    const [itemList, ListOfItem] = useState(items.map((current, index) => {
        return ({
            id: index + 1,
            result: current.result,
            command: current.command
        });
    }));


    const openDescription = () => { };
    const renderItem = ({ item }) => (
        <TableItem result={item.result} command={item.command} />
    );

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <FlatList
                style={{ flex: 5, marginTop: 10, marginRight: 10 }}
                data={itemList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Home: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F5F6F7',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    List: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});