import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, version } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export type PopupProps = {
    setIsPopupOpen(state: boolean): void
    isPopupOpen
}

export default function Popup({ isPopupOpen, setIsPopupOpen }: PopupProps) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 1,
            duration: 700
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 0,
            duration: 700

        }).start(() => { setIsPopupOpen(false) });
    };

    return (
        isPopupOpen ?

            <View style={styles.context} >
                {fadeIn()}
                <Animated.View style={[styles.popup, { scaleX: fadeAnim, scaleY: fadeAnim }]}>
                    <Text style={styles.text_context}>{"Не забудьте активировать Станцию перед тем, как попросить Алису помочь вам. Для этого скажите «Алиса» или нажмите кнопку активации"}</Text>
                    <Text
                        onPress={() => {
                            fadeOut()
                        }}
                        style={[styles.text_context, { marginTop: 10, fontFamily: 'mta-exbolt' }]}>
                        {"ОК"}
                    </Text>
                </Animated.View>
            </View >
            :
            < View />
    );
}

const styles = StyleSheet.create({
    context: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    popup: {
        backgroundColor: '#6E39FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 250,
        padding: 20,
        //Тень
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 10,
        elevation: 20
    },

    text_context: {
        color: '#fafafa',
        textAlign: "center",
        fontFamily: 'mta-bolt',
    },
});