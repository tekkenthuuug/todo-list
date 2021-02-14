import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const OpacityView = (props) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      duration: 2000,
      toValue: 1,
      ...props.animationConfig,
      useNativeDriver: false,
    }).start();
  }, [opacityAnim]);

  return (
    <Animated.View style={{ ...props.style, opacity: opacityAnim }}>
      {props.children}
    </Animated.View>
  );
};
