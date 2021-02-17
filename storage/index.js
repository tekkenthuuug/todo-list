import MMKVAdapter from './adapters/mmkv-adapter';

const adapter = MMKVAdapter;

const setName = adapter.setName;

const getName = adapter.getName;

const addTodo = adapter.addTodo;

const deleteTodoById = adapter.deleteTodoById;

const getTodosMap = adapter.getTodosMap;

export default {
  setName,
  getName,
  addTodo,
  getTodosMap,
  deleteTodoById,
};
