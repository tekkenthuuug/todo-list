import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const SlideInView = (props) => {
  const slideInAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideInAnim, {
      duration: 1000,
      ...props.animationConfig,
      easing: Easing.elastic(1),
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, [slideInAnim]);

  return (
    <Animated.View style={{ ...props.style, bottom: slideInAnim }}>
      {props.children}
    </Animated.View>
  );
};
