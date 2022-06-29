import { StyleSheet, Image, Dimensions } from 'react-native';

import { View } from '../components/Themed';
const windowWidth = Dimensions.get('window').width;
const windowHeight = windowWidth * (100 / 60);
export default function TabTwoScreen() {
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
