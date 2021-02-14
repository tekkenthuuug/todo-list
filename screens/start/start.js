import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { SlideInView, OpacityView } from '../../components';
import styles from './start.styles';
import storage from '../../storage/index';

export const Start = ({ navigation }) => {
  const handleSubmitEditing = async (e) => {
    const text = e.nativeEvent.text;

    if (text.length > 0) {
      await storage.setName(text);
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <OpacityView animationConfig={{ delay: 100 }}>
        <SlideInView>
          <Text style={styles.text}>Hello, stranger. What is your name?</Text>
        </SlideInView>
      </OpacityView>
      <OpacityView animationConfig={{ delay: 1000 }}>
        <TextInput
          style={styles.input}
          placeholder="My name is..."
          placeholderTextColor="rgba(255,255,255,0.5)"
          onSubmitEditing={handleSubmitEditing}
        />
      </OpacityView>
    </View>
  );
};
