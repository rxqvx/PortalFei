import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import { View, Text } from '../components/Themed';
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function RequestsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Do que você precisa?</Text>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="bus-alt" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Passe Escolar</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="layer-group" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Escolha de Área/Ênfase</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.bigContainer}>
                    <FontAwesome5 size={20} name="file-signature" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Solicitação de Documentos</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#006eab'
    },
    title: {
        fontSize: 16,
        color: '#fff',
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    miniContainer: {
        width: 170,
        height: 85,
        borderLeftColor: '#ff8c28',
        borderLeftWidth: 5,
        borderRadius: 5,
    },
    bigContainer: {
        width: 365,
        height: 85,
        borderLeftColor: '#ff8c28',
        borderLeftWidth: 5,
        borderRadius: 5,
    },
    textContainer: {
        fontSize: 16,
        color: '#4495c3',
        padding: 8,
    },
    containersRow: {
        flexDirection: 'row',
        backgroundColor: '#006eab',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    icon: {
        marginLeft: 8,
        marginTop: 8,
    },
});
