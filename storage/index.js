import MMKVAdapter from './adapters/mmkv-adapter';

const adapter = MMKVAdapter;

const setName = async (name) => {
  await adapter.setItem('name', name);
};

const getName = async () => {
  return await adapter.getItem('name');
};

export default {
  setName,
  getName,
};
