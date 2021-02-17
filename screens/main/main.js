import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainHeader, Todo, OpacityView } from '../../components';
import AddTodoPopup from '../../components/add-todo-popup/add-todo-popup';
import storage from '../../storage/index';
import styles from './main.styles';

export const Main = () => {
  const [addPopupOpened, setAddPopupOpened] = useState(false);
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const name = await storage.getName();
      const todos = await storage.getTodosMap();

      setName(name);

      setTodos(Object.values(todos));
    })();
  }, []);

  const onAddPress = () => {
    setAddPopupOpened((opened) => !opened);
  };

  const handleAddTodo = async (todo) => {
    const newTodos = await storage.addTodo(todo);

    setTodos(Object.values(newTodos));
    setAddPopupOpened(false);
  };

  const handleDeleteTodo = async (todo) => {
    const newTodos = await storage.deleteTodoById(todo.id);

    setTodos(Object.values(newTodos));
  };

  return (
    <View style={styles.container}>
      <MainHeader name={name} animatedValue={scrollY} />
      <View style={styles.todos}>
        <View style={styles.todosHeader}>
          <Text style={styles.todosTitle}>Your todos</Text>
          <TouchableOpacity onPress={onAddPress}>
            <Icon name="card-plus" size={26} style={styles.addTodo} />
          </TouchableOpacity>
          {addPopupOpened && <AddTodoPopup onSubmit={handleAddTodo} />}
        </View>
        <FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false },
          )}
          data={todos}
          style={styles.todoList}
          renderItem={(props) => (
            <OpacityView
              animationConfig={{ duration: (props.index + 1) * 200 }}>
              <Todo {...props} onDeletePress={handleDeleteTodo} />
            </OpacityView>
          )}
          keyExtractor={(todo) => todo.id.toString()}
        />
      </View>
    </View>
  );
};
