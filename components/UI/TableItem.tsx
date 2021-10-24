import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { gStyles } from '../../styles/style';

export type TableItemProps = {
    id: number
    result: string
    commands: string[]
    isOpen: boolean
    OpenOrCloseDescription(id: number, fadeUpperAnim: Animated.Value, fadeLowerAnim: Animated.Value): void
}

export default function TableItem({ id, result, commands, isOpen, OpenOrCloseDescription }: TableItemProps) {
    const fadeUpperAnim = useRef(new Animated.Value(20)).current;
    const fadeLowerAnim = useRef(new Animated.Value(0)).current;

    //Эвент на доставания размера
    const find_dimesions = (layout) => {
        const { x, y, width, height } = layout;
    }

    let gHeight, gWidth;

    return (
        <TouchableWithoutFeedback onPress={() => { OpenOrCloseDescription(id, fadeUpperAnim, fadeLowerAnim) }} style={{ height: "100%", width: "100%" }}>
            <View style={{ margin: 10 }}>
                <Animated.View
                    style={[styles.result_container, {
                        borderBottomLeftRadius: fadeUpperAnim,
                        borderBottomRightRadius: fadeUpperAnim
                    }]}>
                    <Text style={[gStyles.text_conteiner, { margin: 10 }]}>{result}</Text>
                </Animated.View>
                {
                    isOpen ?
                        <Animated.View style={[styles.command_container, { scaleY: fadeLowerAnim, scaleX: fadeLowerAnim }]}>
                            {
                                commands.map((current) => {
                                    return (
                                        <Text key={current} style={[gStyles.text_conteiner, { margin: 10 }]}>{current}</Text>
                                    )
                                })
                            }
                        </Animated.View>
                        :
                        <View />

                }
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    result_container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFE076',
        borderRadius: 20,
    },
    command_container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});