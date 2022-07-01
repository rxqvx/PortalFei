import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/appContext';
import { Divider } from '@rneui/base';

export default function ModalScreen() {
  const { username, nickname } = React.useContext(AppContext)

  const RandomRa = () => {
    const hundred = Math.floor(Math.random() * (1000 - 100) + 100)
    const number = Math.floor(Math.random() * (1 - 10) + 10)
    return (
      <>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#747474' }}>
          {hundred}-{number}
        </Text>
      </>
    );
  }


  return (
    <View style={styles.container}>
      {/* o align items e o flexdir quando comentados funfa o divider, mas como farei isso */}
      <View style={{ padding: 15, alignItems: 'center', width: 350, height: 400, backgroundColor: '#fff', borderRadius: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#747474' }}>{username}</Text>
          <Text style={{ fontSize: 16, textDecorationLine: 'underline', color: '#7f7f7f' }}>({nickname})</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, color: '#7f7f7f' }}>Matrícula: </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#747474' }}>22.121.</Text>
          {RandomRa()}
        </View>
        <Divider inset insetType='right' />
      </View>
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

});
