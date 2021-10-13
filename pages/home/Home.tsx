import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { gStyle } from '../../styles/style';
import ListContainer from '../../components/ListContainer';
import ListItem, { ListItemProps } from '../../components/UI/ListItem';


export default function Home() {
    const [chapterList, ListOfCharpter] = useState([
        { title: "музыка и радио", id: 1 },
        { title: "Фильмы, ролики, телепрограммы", id: 2 },
        { title: "Развлечения, игры, уроки", id: 3 },
        { title: "Напоминания, будильники, таймеры", id: 4 },
        { title: "Сервисы, покупки, рецепты", id: 5 },
        { title: "Умный дом", id: 6 }
    ]);

    const openPage = () => {

    }

    const renderItem = ({ item }) => (
        <ListItem title={item.title} />
    );

    return (
        <SafeAreaView style={styles.Home}>
            <Text style={gStyle.title}>This is home page</Text>
            <Text style={[gStyle.title, { fontSize: 22 }]}>Внимание. Не забудьте активировать Станцию перед тем, как попросить Алису помочь вам. Для этого скажите «Алиса» или нажмите кнопку активации</Text>
            <View >
                <FlatList
                    data={chapterList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
    title: {
        fontSize: 32,
    },
});