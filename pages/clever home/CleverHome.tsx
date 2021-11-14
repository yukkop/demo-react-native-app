import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { gStyles } from '../../styles/style';
import TableItem from '../../components/UI/TableItem';
import ListItem from '../../components/UI/ListItem';
import Header from '../../components/Header';
import CircleButton from '../../components/UI/CircleButton';

import { items } from '../../resources/content/clever-home-content.json'

import config from './../../resources/config.json';

export default function CleverHome({ navigation }) {
    const [data, setData] = useState(items.map((current, index) => {
        return ({
            id: index + 1,
            paragraph: current.paragraph
        })
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

    const ChangeDescriptionState = (id: number, item) => {

        item.isOpen = !item.isOpen;
        setData([item, ...data.filter(item => item.id != id)].sort(compareItemId))
    }
    const openPage = (name) => navigation.navigate(name);

    const renderItem = ({ item }) => {
        return (
            <ListItem
                title={item.paragraph}
                openPage={openPage}
            />
        )
    };

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <FlatList
                style={{ flex: 5, marginTop: 10, marginRight: 10 }}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View
                style={{ flex: 5, marginTop: 10, position: 'absolute', bottom: 20, right: 20 }}
            >
                <CircleButton isHide={false} Action={() => navigation.navigate(config.search)} iconName={"search"} />
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