import React, { useContext } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';

import { View, Text } from '../components/Themed';
import { AppContext } from '../contexts/appContext';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const { username, setUsername, nickname, setNickname } = React.useContext(AppContext)
  return (
    <>
    <View style={styles.container}>
      <Text>Insira o nome:</Text>
      <TextInput
        onChangeText={text => setUsername(text.toUpperCase())}
        value={username}
        placeholder="Ex.: HENRIQUE"
        keyboardType="default"
      />
      <Button title="Clear" onPress={() => setUsername('')} />
    </View>
    <View style={styles.container}>
      <Text>Insira o usuário:</Text>
      <TextInput
        onChangeText={text => setNickname(text.toLowerCase())}
        value={nickname}
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
  },
});
