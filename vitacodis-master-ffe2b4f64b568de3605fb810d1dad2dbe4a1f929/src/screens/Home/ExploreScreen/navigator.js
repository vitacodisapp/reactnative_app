import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from './index';
import CategoryListComponent from '../CategoryListComponent';
import CourseDetailsScreen from '_screens/Home/CourseDetailsScreen';

const ExploreStack = createStackNavigator();

const ExploreNavigator = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      options={{header: () => null}}
      name="Explore"
      component={ExploreScreen}
    />
    <ExploreStack.Screen
      options={{header: () => null}}
      name="Explore category"
      component={CategoryListComponent}
    />
    <ExploreStack.Screen
      name="Details"
      component={CourseDetailsScreen}
      options={{header: () => null}}
    />
  </ExploreStack.Navigator>
);

export default ExploreNavigator;
