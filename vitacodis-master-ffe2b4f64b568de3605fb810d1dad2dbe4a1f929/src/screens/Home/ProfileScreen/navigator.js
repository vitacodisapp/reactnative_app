import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './index';
import ChangePasswordScreen from './ChangePasswordScreen/index';
import HelpSupportScreen from './HelpSupportScreen/index';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{header: () => null}}
      name="Profile"
      component={ProfileScreen}
    />
    <ProfileStack.Screen
      options={{header: () => null}}
      name="Change password"
      component={ChangePasswordScreen}
    />
    <ProfileStack.Screen
      options={{header: () => null}}
      name="Help and Support"
      component={HelpSupportScreen}
    />
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
