import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeaturedScreen from './index';
import CourseDetailsScreen from '_screens/Home/CourseDetailsScreen';

const FeaturedStack = createStackNavigator();

const FeaturedNavigator = () => (
  <FeaturedStack.Navigator>
    <FeaturedStack.Screen
      options={{header: () => null}}
      name="Featured"
      component={FeaturedScreen}
    />
    <FeaturedStack.Screen
      name="Details"
      component={CourseDetailsScreen}
      options={{header: () => null}}
    />
  </FeaturedStack.Navigator>
);

export default FeaturedNavigator;
