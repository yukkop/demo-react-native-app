import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { gStyles } from '../../styles/style';
import ListItem from '../../components/UI/ListItem';
import HomeHeader from './HomeHeader'


export default function Home({ navigation }) {
    const [chapterList, ListOfCharpter] = useState([
        { title: "Музыка и радио", id: 1 },
        { title: "Фильмы, ролики, телепрограммы", id: 2 },
        { title: "Развлечения, игры, уроки", id: 3 },
        { title: "Напоминания, будильники, таймеры", id: 4 },
        { title: "Сервисы, покупки, рецепты", id: 5 },
        { title: "Умный дом", id: 6 }
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