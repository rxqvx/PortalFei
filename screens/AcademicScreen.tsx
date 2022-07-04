import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import { View, Text } from '../components/Themed';
import React from 'react'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
export default function AcademicScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vida Acadêmica na palma da mão</Text>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome size={20} name="check-square" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Marcar Presença</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="school" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Aulas Presenciais</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <Ionicons size={20} name="document-text" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Disciplinas</Text>
                </View>
                <View style={styles.miniContainer}>
                    <Ionicons size={20} name="time" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Horários</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="calendar-alt" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Calendário de Provas</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="chalkboard-teacher" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Professores</Text>
                </View>
            </View>
            <View style={styles.containersRow}>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="graduation-cap" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Moodle</Text>
                </View>
                <View style={styles.miniContainer}>
                    <FontAwesome5 size={20} name="book" color="#4495c3" style={styles.icon} />
                    <Text style={styles.textContainer}>Biblioteca</Text>
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
