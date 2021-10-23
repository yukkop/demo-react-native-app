import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { gStyles } from '../../styles/style';
import TableItem from '../../components/UI/TableItem';
import Header from '../../components/Header';

import { items } from '../../resources/music-content.json'


export default function Music({ navigation }) {
    const [data, setData] = useState(items.map((current, index) => {
        return ({
            id: index + 1,
            isOpen: false,
            result: current.result,
            commands: current.commands
        });
    }));

    function compareItemId(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (b.id < a.id) {
            return 1;
        }
        return 0;

    }

    const OpenOrCloseDescription = (id: number) => {
        const item = data.filter(item => item.id == id)[0]; //Эл. списка с ключом равному переменной id
        item.isOpen = !item.isOpen;
        setData([item, ...data.filter(item => item.id != id)].sort(compareItemId))
    };

    const renderItem = ({ item }) => (
        <TableItem
            id={item.id}
            result={item.result}
            commands={item.commands}
            isOpen={item.isOpen}
            OpenOrCloseDescription={OpenOrCloseDescription}
        />
    );

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <FlatList
                style={{ flex: 5, marginTop: 10, marginRight: 10 }}
                data={data}
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