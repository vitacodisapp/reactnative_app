import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyCoursesScreen from './index';
import CourseDetailsScreen from '_screens/Home/CourseDetailsScreen';

const MyCoursesStack = createStackNavigator();

const MyCoursesNavigator = () => (
  <MyCoursesStack.Navigator>
    <MyCoursesStack.Screen
      options={{header: () => null}}
      name="My Courses"
      component={MyCoursesScreen}
    />
    <MyCoursesStack.Screen name="Details" component={CourseDetailsScreen} />
  </MyCoursesStack.Navigator>
);

export default MyCoursesNavigator;
