import { useContext, useState } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/appContext';
import { Divider } from '@rneui/base';
import { Avatar, Icon } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';

export default function ModalScreen() {
  const { username, nickname } = React.useContext(AppContext)
  const [image, setImage] = useState(null)

  let userzada: string = JSON.stringify(username);//retorna o username como stringconstructor então parsear pra string, so que ai vem com aspas 
  userzada = userzada.replace(/\w+/g, function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });//basicamente um pascal case
  userzada = userzada.replace(/"/g, '')//remover todas as aspas do texto (/g é global)

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleImage = (image: string) => {
    const user = "../assets/images/user-solid.svg"
    if (image) {
      return image
    }
    if (image === null) {
      return user;
    }
    return
  };
  return (
    <View style={styles.container}>
      <Avatar
        size={110}
        rounded
        icon={{ name: 'user', type: 'font-awesome', }}
        containerStyle={styles.containerStyle}
        onPress={pickImage}
        source={{
          uri: handleImage(image),
        }}
      />
      <View style={styles.backgroundzada}>
        <View style={styles.divOfUser}>
          <Text style={styles.usernameRa}>{userzada}</Text>
          <Text style={styles.nicknameTitle}>({nickname})</Text>
        </View>
        <View style={styles.divDaMatricula}>
          <Text style={styles.raTitle}>Matrícula: </Text>
          <Text style={styles.usernameRa}>22.121.</Text>
          {RandomRa()}
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="key" type='font-awesome-5' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Alterar senha</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="at" type='font-awesome-5' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Atualização de E-mail</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="cellphone" type='material-community' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Atualização de Telefone</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="envelope-open-text" type='font-awesome-5' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Endereço Correspondência</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="home" type='font-awesome-5' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Endereço Residencial</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowOfList}>
          <Icon name="door-open" type='material-community' color="#757575" size={18} />
          <Text style={styles.textIcons}>  Sair</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#006eab'
  },
  containerStyle: {
    zIndex: 1,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#757575',
    position: 'absolute',
    marginTop: 10
  },
  backgroundzada: {
    marginTop: 75,
    padding: 10,
    width: 350,
    height: 450,
    backgroundColor: '#fff',
    borderRadius: 20

  },
  usernameRa: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#747474'
  },
  raTitle: {
    fontSize: 16,
    color: '#7f7f7f'
  },
  divDaMatricula: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  divOfUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 23,
    backgroundColor: '#FFF',
  },
  nicknameTitle: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#7f7f7f'
  },
  rowOfList: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    margin: 7
  },
  textIcons: {
    fontSize: 16,
    color: '#909090'
  },
  divider: {
    margin: 10,
  },
});
