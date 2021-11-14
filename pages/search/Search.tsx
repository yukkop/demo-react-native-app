import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { gStyles } from '../../styles/style';

import TableItem from '../../components/UI/TableItem';
import ListItem from '../../components/UI/ListItem';

import ch from '../../resources/content/clever-home-content.json';
import chb from '../../resources/content/clever-home-brightness-content.json';
import chc from '../../resources/content/clever-home-color-content.json';
import chct from '../../resources/content/clever-home-color-temperature-content.json';
import choo from '../../resources/content/clever-home-on-off-content.json';
import clct from '../../resources/content/clever-home-control-tv.json'
import cldce from '../../resources/content/clever-home-delay-command-execution.json'
import clfotsotb from '../../resources/content/clever-home-find-out-the-status-of-the-bulb.json'
import clmad from '../../resources/content/clever-home-manage-added-device.json'
import cloot from '../../resources/content/clever-home-on-off-tv.json'
import cloc from '../../resources/content/clever-home-operate-conditioner.json'
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
    const [foundDate, setFoundDate] = useState([])
    const [data, setData] = useState([
        ...ch.items,
        ...chb.items,
        ...chc.items,
        ...chct.items,
        ...choo.items,
        ...clct.items,
        ...cldce.items,
        ...clfotsotb.items,
        ...clmad.items,
        ...cloot.items,
        ...cloc.items,
        ...l.items,
        ...mo.items,
        ...mu.items,
        ...p.items,
        ...r.items,
        ...sh.items,
        ...st.items,
        ...sp.items
    ].map((current, index) => {
        if (current.hasOwnProperty('paragraph')) {
            return ({
                ...current,
                id: index + 1
            })
        }
        else {
            return ({
                ...current,
                id: index + 1,
                isOpen: false
            });
        }
    }))

    const openPage = (name) => navigation.navigate(name);

    //let [search, setSearch] = React.useState(null);
    //const handleChange = e => setSearch(e)

    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: () => (
                    <TextInput
                        style={{ fontSize: 20 }}
                        onChangeText={(val) => funsearch(val)}
                        placeholder="Поиск"
                        keyboardType="default"
                    />
                ),
                headerRight: () => (
                    <Feather onPress={() => { }} name="search" size={24} color="black" />
                )
            });
    }, [navigation]);

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

    const OpenOrCloseDescription = (id: number, fadeUpperAnim: Animated.Value, fadeLowerAnim: Animated.Value) => {
        const item = foundDate.filter(item => item.id == id)[0]; //Эл. списка с ключом равному переменной id
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
        let index = foundDate.indexOf(item)
        item.isOpen = !item.isOpen;
        setFoundDate([...foundDate.slice(0, index), item, ...foundDate.slice(index + 1, foundDate.length + 1)])
    }

    const funsearch = (keyWord: string) => {
        if (keyWord == null) {
            setFoundDate([])
        }

        console.log(keyWord);
        setFoundDate(data.filter((current) => {

            if (current.hasOwnProperty("result")) {
                if (current.result.toLowerCase().indexOf(keyWord.toLowerCase()) != -1) {
                    return current
                }
            }
            else if (current.hasOwnProperty("paragraph")) {
                if (current.paragraph.toLowerCase().indexOf(keyWord.toLowerCase()) != -1) {
                    return current
                }
            }
        }))
    }

    const ListEmptyComponent = () => {
        return (
            <Text style={{ opacity: 0.5 }}>Пусто</Text>
        );
    }

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <FlatList
                style={{ flex: 5, marginTop: 10 }}
                data={foundDate}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmptyComponent}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Home: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    }
});