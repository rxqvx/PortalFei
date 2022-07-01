import { StyleSheet, Image, Dimensions } from 'react-native';

import { View } from '../components/Themed';
const windowWidth = Dimensions.get('window').width;
const windowHeight = windowWidth * (100 / 55);
import React from 'react'
import * as SecureStore from 'expo-secure-store';
import { AppContext } from '../contexts/appContext';

export default function TabTwoScreen() {
  const { setNickname } = React.useContext(AppContext);

  const getValueFor = async (key: any) => {
    const result = await SecureStore.getItemAsync(key);

    return result;
  }

  const load = async () => {
    const response = await getValueFor("nicknameStorage");

    console.log("nick capturado: ", response)
    if (response) {
      setNickname(response);
    }
  }

  React.useEffect(() => {
    load();
  }, [])

  return (
    <View style={styles.container}>
      <Image
        style={{ width: windowWidth, height: windowHeight }}
        source={require('../assets/images/1.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
