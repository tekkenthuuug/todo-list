import React from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './todo.styles';
import { Swipeable } from 'react-native-gesture-handler';

const TodoLeftActions = ({ dragX, onDeletePress }) => {
  const opacity = dragX.interpolate({
    inputRange: [-55, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.leftAction, { opacity }]}>
      <TouchableOpacity onPress={onDeletePress}>
        <View style={styles.iconContainer}>
          <Icon name="delete" style={styles.actionText} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const Todo = ({ item, onDeletePress }) => {
  const { name, icon, createdAt } = item;
  return (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <TodoLeftActions
          progress={progress}
          dragX={dragX}
          onDeletePress={() => onDeletePress(item)}
        />
      )}>
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
            {' '}
            Created at: {new Date(createdAt).toLocaleDateString()}{' '}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};
