import React from 'react';
import { Button, StyleSheet, TextInput, } from 'react-native';
import { View, Text } from '../components/Themed';
import { AppContext } from '../contexts/appContext';
import { RootTabScreenProps } from '../types';
import * as SecureStore from 'expo-secure-store';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const { username, setUsername, nickname, setNickname } = React.useContext(AppContext)

  const handleNickNameInputChange = (text: string) => {
    const newNickname = text.toLowerCase();

    setNickname(newNickname)
    SecureStore.setItemAsync("nicknameStorage", newNickname)
  }

  const handleUserNameInputChange = (text: string) => {
    const newUsername = text.toUpperCase();

    setUsername(newUsername)
    SecureStore.setItemAsync("usernameStorage", newUsername)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: '#000' }}>Insira o nome:</Text>
        <TextInput
          onChangeText={newText => handleUserNameInputChange(newText)}
          placeholder="Ex.: HENRIQUE"
          keyboardType="default"
        />
        <Button title="Clear" onPress={() => setUsername('')} />
      </View>
      <View style={styles.container}>
        <Button title="Clear All" onPress={() => setUsername('')} />
      </View>
      <View style={styles.container}>
        <Text style={{ color: '#000' }}>Insira o usuário:</Text>
        <TextInput
          onChangeText={handleNickNameInputChange}
          placeholder="Ex.: unifhkonishi"
          keyboardType="default"
        />
        <Button title="Clear" onPress={() => setNickname('')} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
