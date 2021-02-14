import React from 'react';
import { View, Text } from 'react-native';
import styles from './todo.styles';

export const Todo = () => {
  return (
    <View style={styles.container}>
      <Text>Todo</Text>
    </View>
  );
};

export const TodoSeparator = () => {
  return <View style={styles.separator}></View>;
};
