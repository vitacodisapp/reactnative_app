import React, {useRef, useEffect} from 'react';
import {View, Image, Animated, Easing} from 'react-native';

import LogoImage from '_assets/images/app-logo.png';

import styles from './styles';

const bubbleStyles = ['orangeBubble', 'redBubble', 'blueBubble', 'greenBubble'];

const CustomSplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Image source={LogoImage} />
      {bubbleStyles.map((item) => (
        <Animated.View
          key={item}
          style={{
            ...styles[item],
            transform: [
              {
                scaleX: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              {
                scaleY: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          }}>
          <View />
        </Animated.View>
      ))}
    </View>
  );
};

export default CustomSplashScreen;
