import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { gStyles } from '../../styles/style';
import ListItem from '../../components/UI/ListItem';
import HomeHeader from './HomeHeader'
import Popup from '../../components/Popup';
import Dialog from '../../components/Dialog';
import CircleButton from '../../components/UI/CircleButton';
import BannerAd from "./../../BannerAd";
import { AdMobInterstitial } from "expo-ads-admob";

import config from './../../resources/config.json'


export default function Home({ navigation }) {
    let counter = 2;
    const counterMax = 3;

    const initInterstitialAds = async () => {
        await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
    };

    const [isDialogOpen, setDialogOpen] = useState(true);

    const [chapterList, ListOfCharpter] = useState([
        { title: config.music, id: 1 },
        { title: config.movie, id: 2 },
        { title: config.leisure, id: 3 },
        { title: config.speak, id: 4 },
        { title: config.phone, id: 5 },
        { title: config.reminder, id: 6 },
        { title: config.shop, id: 7 },
        { title: config['clever-home'], id: 8 }
    ]);

    const openPage = (name) => {
        counter += 1;
        if (counter == counterMax) {
            counter = 0;
            initInterstitialAds();
        }
        console.log(counter);
        navigation.navigate(name)
    };

    const renderItem = ({ item }) => (
        <ListItem title={item.title} openPage={openPage} />
    );

    const setDialogState = (state) => {
        setDialogOpen(state);
    }

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
            <Dialog text={
                "Не забудьте активировать Станцию перед тем, как попросить Алису помочь вам. Для этого скажите «Алиса» или нажмите кнопку активации"
            }
                isOpen={isDialogOpen}
                setOpen={setDialogState}
            />
            <View
                style={{ flex: 5, marginTop: 10, position: 'absolute', bottom: 20, right: 20 }}
            >
                <CircleButton isHide={isDialogOpen} Action={() => setDialogState(!isDialogOpen)} iconName={"exclamation"} />
                <CircleButton isHide={isDialogOpen} Action={() => navigation.navigate(config.search)} iconName={"search"} />
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
    floor: {
        height: '8%',
    },
});