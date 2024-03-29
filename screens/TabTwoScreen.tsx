import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";

import { View, Text } from "../components/Themed";
import React from "react";
import * as SecureStore from "expo-secure-store";
import { AppContext } from "../contexts/appContext";
import { responsiveHeight, responsiveWidth } from "../utils/responsible";

export default function TabTwoScreen() {
  const { setNickname, setUsername } = React.useContext(AppContext);

  const getValueFor = async (key: any) => {
    const result = await SecureStore.getItemAsync(key);

    return result;
  };

  const load = async () => {
    const responseNick = await getValueFor("nicknameStorage");
    const responseUser = await getValueFor("usernameStorage");

    if (responseNick) {
      setNickname(responseNick);
    }
    if (responseUser) {
      setUsername(responseUser);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={styles.divsHome}>
          <Text style={styles.title1}>Atenção</Text>
          <Text style={styles.text1}>Se o seu aplicativo estiver aparecendo o erro 403, é preciso acessar o Portal do Aluno na versão web e dar o aceite no termo de responsabilidade para retomada das aulas presenciais 1º semestre 2022 e depois acessar normalmente o aplicativo.</Text>
        </View>
        <View style={styles.divsHome1}>
          <Text style={styles.title1}>Aviso - Aulas Presenciais</Text>
          <Text style={styles.text1}>Como previsto no calendário escolar, o início das aulas do 1º semestre de 2022 ocorrerá no dia 14 de fevereiro PRESENCIALMENTE.</Text>
          <Text style={styles.text2}> A FEI está preparada para receber sua comunidade e contamos com a colaboração de todos para desenvolvermos as atividades acadêmicas com segurança, harmonia e motivação.</Text>
          <Text style={styles.text2}>Informaçõese específicas serãoveiculadas ao longo dos próximos dias. Centro Universitário FEI.</Text>
        </View> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/whatsFeiano.png")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/cursosFei.png")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/horarioAtendimento.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#006eab",
  },
  divsHome: {
    width: 370,
    height: 400,
    backgroundColor: "#004580",
    borderRadius: 15,
    margin: 10,
  },
  divsHome1: {
    width: 370,
    height: 580,
    backgroundColor: "#004580",
    borderRadius: 15,
    margin: 10,
  },
  title1: {
    paddingLeft: 10,
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 25,
    color: "#fff",
    padding: 10,
  },
  text2: {
    fontSize: 25,
    color: "#fff",
    padding: 10,
    paddingTop: 10,
  },
  imageContainer: {
    width: responsiveWidth(370),
    height: responsiveHeight(220),
    backgroundColor: "transparent",
    marginBottom: 12,
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
