import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export type PopupProps = {
    setIsPopupOpen(state: boolean): void
    isPopupOpen
}

export default function Popup({ isPopupOpen, setIsPopupOpen }: PopupProps) {

    return (
        isPopupOpen ?

            <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0)' }} >
                <View style={[styles.popup]}>
                    <Text style={styles.text_context}>{"Не забудьте активировать Станцию перед тем, как попросить Алису помочь вам. Для этого скажите «Алиса» или нажмите кнопку активации"}</Text>
                    <Text onPress={() => setIsPopupOpen(false)} style={[styles.text_context, { marginTop: 10, fontFamily: 'mta-exbolt' }]}>{"ОК"}</Text>
                </View>
            </View >
            :
            < View />
    );
}

const styles = StyleSheet.create({

    popup: {
        backgroundColor: '#6E39FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 250,
        padding: 20
    },
    text_context: {
        color: '#fafafa',
        textAlign: "center",
        fontFamily: 'mta-bolt',
    },
});