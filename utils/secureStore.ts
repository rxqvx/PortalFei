import * as SecureStore from "expo-secure-store";

export async function saveValue(key: string, value: string) {
  const result = await SecureStore.setItemAsync(key, value);
  console.log("result", result);
}

export async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);

  if (result) {
    console.log("profilePicture:" + result);
  } else {
    console.log("Não há fotos de perfil armazenadas em cache");
  }
  return result;
}
