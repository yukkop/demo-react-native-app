import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { gStyles } from '../../styles/style';
import ListItem from '../../components/UI/ListItem';
import HomeHeader from './HomeHeader'
import Popup from '../../components/Popup';
import CircleButton from '../../components/UI/CircleButton'

import config from './../../resources/config.json'


export default function Home({ navigation }) {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const [chapterList, ListOfCharpter] = useState([
        { title: config.music, id: 1 },
        { title: config.movie, id: 2 },
        { title: config.leisure, id: 3 },
        { title: config.speak, id: 4 },
        { title: config.phone, id: 5 },
        { title: config.reminder, id: 6 },
        { title: config.shop, id: 7 },
        { title: config.clever, id: 8 }
    ]);

    const [buttons, sertButtons] = useState([
        { icon: require('./../../assets/cog.png'), id: 0 },
        { icon: require('./../../assets/cog.png'), id: 1 }
    ]);

    const openPage = (name) => navigation.navigate(name);

    const renderItem = ({ item }) => (
        <ListItem title={item.title} name={item.name} openPage={openPage} />
    );

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            <FlatList
                style={{ flex: 5, marginTop: 10 }}
                data={chapterList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.floor}>
            </View>
            <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            <FlatList
                style={{ flex: 5, marginTop: 10, position: 'absolute', bottom: 20, right: 20 }}
                data={buttons}
                renderItem={({ item }) => {
                    return (
                        <CircleButton icon={item.icon} />
                    );
                }}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
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
    floor: {
        height: '8%',
    },
});