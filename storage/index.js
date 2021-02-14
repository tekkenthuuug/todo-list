import MMKVAdapter from './adapters/mmkv-adapter';

let adapter = MMKVAdapter;

const setAdapter = (_adapter) => {
  if (adapter === null) {
    adapter = _adapter;
  } else {
    throw Error('Adapter already set');
  }
};

const setName = async (name) => {
  await adapter.setItem('name', name);
};

const getName = async () => {
  return await adapter.getItem('name');
};

export default {
  setAdapter,
  setName,
  getName,
};
