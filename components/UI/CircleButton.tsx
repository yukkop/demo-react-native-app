import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import { gStyles } from '../../styles/style';
import { Svg, Path, SvgXml, Defs, Rect, Mask, Circle } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';

import ExclamationSolid from './exclamation-solid';

export type ButtonProps = {
    isHide: boolean,
    iconName: any,
    Action(): void
}

export default function CircleButton({ isHide, iconName, Action }: ButtonProps) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 1,
            duration: 300
        }).start(() => { });
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: false,
            toValue: 0,
            duration: 300
        }).start(() => { });
    };
    return (
        (
            isHide ?
                fadeOut()
                :
                fadeIn()
        ),
        <View pointerEvents={isHide ? 'none' : 'auto'}>
            < TouchableHighlight underlayColor='transparent' onPress={Action} >

                <Animated.View style={[styles.Context, { scaleY: fadeAnim, scaleX: fadeAnim }]}>
                    <Svg height="100%" width="100%">
                        <Circle r="50%" cx="50%" cy="50%"
                            fill="#6E39FF"
                        />
                    </Svg>
                    <View style={{ justifyContent: 'center', elevation: 50, position: 'absolute', height: '60%', width: '60%', }}>
                        <FontAwesome name={iconName} size={35} color="#fafafa" style={{ textAlign: 'center' }} />
                    </View>
                </Animated.View>
            </TouchableHighlight >
        </View>
    )
}

const styles = StyleSheet.create({
    Context: {
        height: 75,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    svg: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 10,
        elevation: 20
    }
});