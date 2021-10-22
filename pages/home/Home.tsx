import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { gStyles } from '../../styles/style';
import ListItem from '../../components/UI/ListItem';
import HomeHeader from './HomeHeader'

import config from './../../resources/config.json'


export default function Home({ navigation }) {
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

    const openPage = (name) => navigation.navigate(name);

    const renderItem = ({ item }) => (
        <ListItem title={item.title} name={item.name} openPage={openPage} />
    );

    return (
        <SafeAreaView style={styles.Home}>
            <StatusBar style="auto" />
            { /* <HomeHeader /> */}
            <FlatList
                style={{ flex: 5, marginTop: 10 }}
                data={chapterList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.floor}>
                <Text style={gStyles.text_conteiner}>
                    <Text style={styles.text_highligt}>
                        {"Внимание. "}
                    </Text>
                    <Text style={styles.text_context}>
                        {"Не забудьте активировать Станцию перед тем, как попросить Алису помочь вам. Для этого скажите «Алиса» или нажмите кнопку активации"}
                    </Text>
                </Text>
            </View>
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
    text_context: {
    },
    text_highligt: {
        color: 'red'
    },
    floor: {
        height: '16%',
    },
});