import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { gStyles } from '../../styles/style';
import TableItem from '../../components/UI/TableItem';
import ListItem from '../../components/UI/ListItem';
import Header from '../../components/Header';

import { items } from '../../resources/content/shop-content.json'

import CircleButton from '../../components/UI/CircleButton';
import config from './../../resources/config.json';

export default function Shop({ navigation }) {
    const [data, setData] = useState(items.map((current, index) => {
        if (current.hasOwnProperty('paragraph')) {
            return ({
                id: index + 1,
                paragraph: current.paragraph
            })
        }
        else {
            return ({
                id: index + 1,
                isOpen: false,
                result: current.result,
                commands: current.commands
            });
        }
    }));

    const OpenOrCloseDescription = (id: number, fadeUpperAnim: Animated.Value, fadeLowerAnim: Animated.Value) => {
        const item = data.filter(item => item.id == id)[0]; //Эл. списка с ключом равному переменной id
        if (item.isOpen) {

            Animated.timing(fadeLowerAnim, {
                useNativeDriver: false,
                toValue: 0,
                duration: 100
            }).start(() => {
                Animated.timing(fadeUpperAnim, {
                    useNativeDriver: false,
                    toValue: 20,
                    duration: 100
                }).start(() => { ChangeDescriptionState(id, item); });
            });

        }
        else {
            ChangeDescriptionState(id, item);
            Animated.timing(fadeUpperAnim, {
                useNativeDriver: false,
                toValue: 0,
                duration: 100
            }).start(() => {
                Animated.timing(fadeLowerAnim, {
                    useNativeDriver: false,
                    toValue: 1,
                    duration: 100
                }).start(() => { });
            })
        }
    };

    const ChangeDescriptionState = (id: number, item) => {
        let index = data.indexOf(item)
        item.isOpen = !item.isOpen;
        setData([...data.slice(0, index), item, ...data.slice(index + 1, data.length + 1)])
    }
    const openPage = (name) => navigation.navigate(name);

    const renderItem = ({ item }) => {
        if (item.hasOwnProperty('paragraph')) {
            return (
                <ListItem
                    title={item.paragraph}
                    openPage={openPage}
                />
            )
        }
        else {
            return (
                < TableItem
                    id={item.id}
                    result={item.result}
                    commands={item.commands}
                    isOpen={item.isOpen}
                    OpenOrCloseDescription={OpenOrCloseDescription}
                />
            )
        }
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