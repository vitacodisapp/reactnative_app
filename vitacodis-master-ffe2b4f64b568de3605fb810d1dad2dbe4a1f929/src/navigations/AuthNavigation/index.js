import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '_screens/Login/index';
import SignUp from '_screens/SignUp/index';
import ForgotPassword from '_screens/ForgotPassword/index';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
      <AuthStack.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            shadowRadius: 0,
            shadowColor: 'white',
            backgroundColor: 'rgba(248, 248, 248, 0.82)',
          },
        }}
        name="Forgot password"
        component={ForgotPassword}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
