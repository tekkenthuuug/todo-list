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

const getTodosMap = async () => {
  const todos = await MMKV.getMapAsync('todos');

  return todos ? todos : {};
};

const addTodo = async (todo) => {
  const todoWithId = { ...todo, id: v4() };
  const todos = await getTodosMap();

  todos[todoWithId.id] = todoWithId;

  await MMKV.setMapAsync('todos', todos);

  return todos;
};

const deleteTodoById = async (todoId) => {
  const todos = await getTodosMap();

  delete todos[todoId];

  await MMKV.setMapAsync('todos', todos);

  return todos;
};

export default {
  setName,
  getName,
  addTodo,
  getTodosMap,
  deleteTodoById,
};
