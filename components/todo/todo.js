import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './todo.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Todo = ({ item: { name, icon, createdAt }, index }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: (index + 1) * 200,
      useNativeDriver: false,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
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
