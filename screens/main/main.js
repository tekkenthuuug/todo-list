import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import storage from '../../storage/index';

export const Main = ({ navigation }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    storage.getName().then((name) => {
      if (name && name.length > 0) {
        setName(name);
      } else {
        navigation.navigate('Start');
      }
    });
  }, []);

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
