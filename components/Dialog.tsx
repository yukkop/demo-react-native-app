import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

export type ButtonProps = {
    isOpen,
    setOpen(state): void
    text: string
}

export default function Dialog({ isOpen, setOpen, text }: ButtonProps) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [hide, setHide] = useState(false)

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 1,
            duration: 300
        }).start(({ finished }) => { finished ? setHide(false) : ({}) });

    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 0,
            duration: 300
        }).start(() => { ({ finished }) => { finished ? setHide(false) : ({}) } });
    };

    const Render = () => {
        return (
            <View pointerEvents={isOpen ? 'auto' : 'none'} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'absolute' }} >
                <Animated.View style={[styles.popup, { scaleX: fadeAnim, scaleY: fadeAnim }]}>
                    <Text style={styles.text_context}>{text}</Text>
                    <Text
                        onPress={() => {
                            setOpen(false)
                        }}
                        style={
                            [
                                styles.text_context,
                                {
                                    marginTop: 10,
                                    fontFamily: 'mta-exbolt'
                                }
                            ]
                        }
                    >
                        {"ОК"}
                    </Text>
                </Animated.View>
            </View >
        );
    }

    return (
        (
            isOpen ?
                fadeIn()
                :
                fadeOut()
        ),
        Render()
    )
}

const styles = StyleSheet.create({
    context: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
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