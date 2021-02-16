import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainHeader, Todo, OpacityView } from '../../components';
import storage from '../../storage/index';
import styles from './main.styles';

const data = [
  {
    id: 0,
    name: 'Drink milk',
    icon: {
      bgColor: 'red',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 1,
    name: 'Clean room',
    icon: {
      bgColor: 'blue',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: 'Buy milk',
    icon: {
      bgColor: 'green',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 3,
    name: 'Do the dishes',
    icon: {
      bgColor: 'lightblue',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 4,
    name: 'Task4',
    icon: {
      bgColor: '#aaa',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 5,
    name: 'Task5',
    icon: {
      bgColor: '#aaa',
      name: 'card',
    },
    createdAt: Date.now(),
  },
  {
    id: 6,
    name: 'Task6',
    icon: {
      bgColor: '#aaa',
      name: 'card',
    },
    createdAt: Date.now(),
  },
];

export const Main = ({ navigation }) => {
  const [name, setName] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const name = await storage.getName();
      if (name && name.length > 0) {
        setName(name);
      } else {
        navigation.navigate('Start');
      }
    })();
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
          renderItem={(props) => (
            <OpacityView
              animationConfig={{ duration: (props.index + 1) * 200 }}>
              <Todo {...props} />
            </OpacityView>
          )}
          keyExtractor={(todo) => todo.id.toString()}
        />
      </View>
    </View>
  );
};
