import MMKVStorage from 'react-native-mmkv-storage';
import 'react-native-get-random-values';
import { v4 } from 'uuid';

const MMKV = new MMKVStorage.Loader().initialize();

const setName = async (name) => {
  return await MMKV.setStringAsync('name', name);
};

const getName = async () => {
  return await MMKV.getStringAsync('name');
};

const addTodo = async (todo) => {
  const todoWithId = { ...todo, id: v4() };
  const todos = await MMKV.getMapAsync('todos');

  const newTodos = todos
    ? { [todoWithId.id]: todoWithId, ...todos }
    : { [todoWithId.id]: todoWithId };

  await MMKV.setMapAsync('todos', newTodos);

  return newTodos;
};

const getTodosList = async () => {
  const todos = await MMKV.getMapAsync('todos');

  return todos ? todos : [];
};

export default {
  setName,
  getName,
  addTodo,
  getTodosList,
};
