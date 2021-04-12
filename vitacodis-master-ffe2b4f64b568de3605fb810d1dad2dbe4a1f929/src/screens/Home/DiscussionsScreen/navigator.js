import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DiscussionsScreen from './index';
import DiscussionContentScreen from './DiscussionContentScreen/index';
import AddDiscussionScreen from './AddDiscussionScreen/index';

const DiscussionsStack = createStackNavigator();

const DiscussionsNavigator = () => (
  <DiscussionsStack.Navigator>
    <DiscussionsStack.Screen
      options={{header: () => null}}
      name="Discussions"
      component={DiscussionsScreen}
    />
    <DiscussionsStack.Screen
      options={{header: () => null}}
      name="Discussion content"
      component={DiscussionContentScreen}
    />
    <DiscussionsStack.Screen
      options={{header: () => null}}
      name="New discussion"
      component={AddDiscussionScreen}
    />
  </DiscussionsStack.Navigator>
);

export default DiscussionsNavigator;
