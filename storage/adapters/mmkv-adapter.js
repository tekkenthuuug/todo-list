import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

const setItem = async (name, value) => {
  await MMKV.setStringAsync(name, value);
};

const getItem = async (name) => {
  return await MMKV.getStringAsync(name);
};

export default {
  getItem,
  setItem,
};
