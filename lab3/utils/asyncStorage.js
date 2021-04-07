import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    return value;
  }
  return "";
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const addToStorage = async (stringWithFont) => {
  const storage = await getStorage();
  const newData = { storage: [] };
  if (storage) {
    newData.storage = [...storage];
  }
  newData.storage.push(stringWithFont);
  storeData("storage", JSON.stringify(newData));
};

export const getStorage = async () => {
  const data = await getData("storage");
  if (data) {
    return JSON.parse(data).storage;
  }
  return "";
};
