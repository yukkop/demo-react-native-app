import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { gStyles } from '../../styles/style';

export type TableItemProps = {
    id: number
    result: string
    commands: string[]
    isOpen: boolean
    OpenOrCloseDescription(id: number): void
}

export default function TableItemv2({ id, result, commands, isOpen, OpenOrCloseDescription }: TableItemProps) {

    return (
        <TouchableWithoutFeedback onPress={() => { OpenOrCloseDescription(id) }} style={{ height: "100%", width: "100%" }}>
            <View style={{ margin: 10 }}>
                <View style={styles.result_container}>
                    <Text style={[gStyles.text_conteiner, { margin: 10 }]}>{result}</Text>
                </View>
                {
                    isOpen ?
                        <View style={styles.command_container}>
                            {
                                commands.map((current) => {
                                    return (
                                        <Text key={current} style={[gStyles.text_conteiner, { margin: 10 }]}>{current}</Text>
                                    )
                                })

                            }
                        </View>
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
        backgroundColor: '#E7ECF2',
    },
    command_container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#ffff',
    }
});