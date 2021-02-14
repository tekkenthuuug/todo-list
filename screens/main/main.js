import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList, TouchableOpacity, Animated } from 'react-native';
import { Todo, TodoSeparator, MainHeader } from '../../components';
import storage from '../../storage/index';
import styles from './main.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: 0,
    name: 'Task0',
  },
  {
    id: 1,
    name: 'Task1',
  },
  {
    id: 2,
    name: 'Task2',
  },
  {
    id: 3,
    name: 'Task3',
  },
  {
    id: 4,
    name: 'Task4',
  },
  {
    id: 5,
    name: 'Task5',
  },
  {
    id: 6,
    name: 'Task6',
  },
];

export const Main = ({ navigation }) => {
  const [name, setName] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    storage.getName().then((name) => {
      if (name && name.length > 0) {
        setName(name);
      } else {
        navigation.navigate('Start');
      }
    });
  }, []);

  const onPress = () => {
    console.log(scrollY);
  };

  return (
    <View style={styles.container}>
      <MainHeader name={name} animatedValue={scrollY} />
      <View style={styles.todos}>
        <View style={styles.todosHeader}>
          <Text style={styles.todosTitle}>Your todos</Text>
          <TouchableOpacity onPress={onPress}>
            <Icon name="card-plus" size={26} style={styles.addTodo} />
          </TouchableOpacity>
        </View>
        <FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false },
          )}
          data={data}
          style={styles.todoList}
          ItemSeparatorComponent={TodoSeparator}
          renderItem={Todo}
          keyExtractor={(todo) => todo.id.toString()}
        />
      </View>
    </View>
  );
};
