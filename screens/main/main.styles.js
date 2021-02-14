import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
    display: 'flex',
  },

  todos: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
  },
  todosHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addTodo: {
    backgroundColor: theme.backgroundColor,
    borderRadius: 100,
    color: '#fff',
    padding: 10,
  },
  todosTitle: {
    fontSize: 26,
  },
  todoList: {
    marginTop: 26,
    paddingRight: 12,
  },
});

export default styles;
