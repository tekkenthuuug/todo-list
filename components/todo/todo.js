import React from 'react';
import { Animated, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './todo.styles';

export const Todo = ({ item: { name, icon, createdAt } }) => {
  return (
    <Animated.View style={styles.container}>
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
          {' '}
          Created at: {new Date(createdAt).toLocaleDateString()}{' '}
        </Text>
      </View>
    </Animated.View>
  );
};
