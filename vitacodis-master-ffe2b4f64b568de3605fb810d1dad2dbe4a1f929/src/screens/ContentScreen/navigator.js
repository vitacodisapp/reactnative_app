import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContentScreen from './index';
import CourseDiscussion from './CourseDiscussion/index';
import CourseFeedback from './CourseFeedback/index';

const ContentStack = createStackNavigator();

const ContentNavigator = () => (
  <ContentStack.Navigator>
    <ContentStack.Screen
      options={{header: () => null}}
      name="Content"
      component={ContentScreen}
    />
    <ContentStack.Screen
      options={{header: () => null}}
      name="Course Discussion"
      component={CourseDiscussion}
    />
    <ContentStack.Screen
      options={{header: () => null}}
      name="Course Feedback"
      component={CourseFeedback}
    />
  </ContentStack.Navigator>
);

export default ContentNavigator;
