import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './add-todo-popup.styles';

const AddTodoPopup = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const scaleAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      duration: 300,
      toValue: 0,
      easing: Easing.elastic(1),
      useNativeDriver: false,
    }).start();
  }, [scaleAnim]);

  const handleTodoSubmit = () => {
    if (!name) {
      return;
    }

    onSubmit({
      name,
      icon: {
        bgColor: 'red',
        name: 'card',
      },
      createdAt: Date.now(),
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: scaleAnim }],
          opacity: scaleAnim.interpolate({
            inputRange: [0, 400],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <View style={styles.conn} />
      <TextInput
        placeholder="Todo name..."
        autoFocus
        style={styles.input}
        onChangeText={(text) => setName(text)}
        onSubmitEditing={handleTodoSubmit}
      />
      <TouchableOpacity style={styles.addButton}>
        <Button title="Add todo" onPress={handleTodoSubmit} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AddTodoPopup;
