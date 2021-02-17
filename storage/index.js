import MMKVAdapter from './adapters/mmkv-adapter';

const adapter = MMKVAdapter;

const setName = adapter.setName;

const getName = adapter.getName;

const addTodo = adapter.addTodo;

const getTodosList = adapter.getTodosList;

export default {
  setName,
  getName,
  addTodo,
  getTodosList,
};
