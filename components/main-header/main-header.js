import React from 'react';
import { Animated } from 'react-native';
import styles from './main-header.styles';

export const MainHeader = ({ name, animatedValue }) => {
  const margin = animatedValue.interpolate({
    inputRange: [0, 120],
    outputRange: [44, 22],
    extrapolate: 'clamp',
  });

  const hours = new Date().getHours();

  let greetingText = `Good morning,`;
  if (hours > 12 && hours < 18) {
    greetingText = `Good day,`;
  } else if (hours >= 18 && hours < 22) {
    greetingText = `Good evening,`;
  } else if (hours >= 22 || hours < 6) {
    greetingText = `Good night,`;
  }

  return (
    <Animated.Text style={[styles.greeting, { marginVertical: margin }]}>
      {greetingText}
      {'\n'}
      {name}
    </Animated.Text>
  );
};
