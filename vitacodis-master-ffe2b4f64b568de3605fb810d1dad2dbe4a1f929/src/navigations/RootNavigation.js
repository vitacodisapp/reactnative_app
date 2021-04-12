import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from '_navigations/AuthNavigation/index';
import HomeNavigator from '_navigations/HomeNavigation/index';
import {setTokenToAxios} from '../helpers/auth';

const RootStack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const RootNavigation = () => {
  const {
    auth: {currentUser},
  } = useSelector((store) => store);

  useEffect(() => {
    if (currentUser && currentUser.token) {
      setTokenToAxios(currentUser.token);
    }
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        // initialRouteName={currentUser ? 'Home' : 'Auth'}
        initialRouteName="Home"
        headerMode="none">
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Home" component={HomeNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
