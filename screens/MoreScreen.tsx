import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import { View, Text } from '../components/Themed';
import React from 'react'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function MoreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione a opção desejada</Text>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome size={20} name="barcode" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Boletos</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome size={20} name="vcard" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Estágios</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome size={20} name="pie-chart" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>CPA</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome name="file-pdf-o" size={20} color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Normas e Procedimentos</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.bigContainer}>
                    <FontAwesome5 size={20} name="certificate" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Certificados</Text>
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
        backgroundColor: '#FFF'
    },
    bigContainer: {
        width: 365,
        height: 85,
        borderLeftColor: '#ff8c28',
        borderLeftWidth: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
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
