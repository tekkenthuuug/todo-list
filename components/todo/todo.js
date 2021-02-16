import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './todo.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Todo = ({ item: { name, icon, createdAt } }) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon
          name={icon.name}
          size={28}
          style={[styles.icon, { backgroundColor: icon.bgColor }]}
        />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.createdAt}>
          Created at: {new Date(createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export const TodoSeparator = () => {
  return <View style={styles.separator} />;
};
