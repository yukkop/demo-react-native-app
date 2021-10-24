import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { gStyles } from '../../styles/style';
import { Svg, Path, SvgXml, Defs, Rect, Mask, Circle } from 'react-native-svg';

import ExclamationSolid from './exclamation-solid';

export type ButtonProps = {
    icon,
    Action(): void
}

export default function CircleButton({ icon, Action }: ButtonProps) {
    return (
        <View style={styles.Context}>
            <Svg height="100%" width="100%">
                <Circle r="50%" cx="50%" cy="50%"
                    fill="#6E39FF"
                />
            </Svg>
            <View style={{ elevation: 25, position: 'absolute', height: '60%', width: '60%', }}>
                <ExclamationSolid />
            </View>
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