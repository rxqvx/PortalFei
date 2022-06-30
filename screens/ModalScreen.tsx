import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/appContext';
import { Divider } from '@rneui/base';

export default function ModalScreen() {
  const { username } = React.useContext(AppContext)
  return (
    <View style={styles.container}>
      <View style={{ width: 350, height: 400, backgroundColor: '#fff', borderRadius: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>{username}</Text>
        <Divider />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006eab'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
