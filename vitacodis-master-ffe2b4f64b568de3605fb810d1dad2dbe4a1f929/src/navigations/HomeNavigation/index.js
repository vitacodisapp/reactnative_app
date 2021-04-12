import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import FeaturedNavigator from '_screens/Home/FeaturedScreen/navigator';
import ExploreNavigator from '_screens/Home/ExploreScreen/navigator';
import MyCoursesNavigator from '_screens/Home/MyCoursesScreen/navigator';
import DiscussionsScreen from '_screens/Home/DiscussionsScreen/navigator';
import ProfileScreen from '_screens/Home/ProfileScreen/navigator';
import ContentScreen from '_screens/ContentScreen/navigator';

import StarIcon from '_assets/images/star.svg';
import ActiveStarIcon from '_assets/images/active_star.svg';
import SearchIcon from '_assets/images/search.svg';
import ActiveSearchIcon from '_assets/images/active_search.svg';
import PlayIcon from '_assets/images/play.svg';
import ActivePlayIcon from '_assets/images/active_play.svg';
import DiscussionsIcon from '_assets/images/discussions.svg';
import ActiveDiscussionsIcon from '_assets/images/active_discussions.svg';
import ProfileIcon from '_assets/images/profile.svg';
import ActiveProfileIcon from '_assets/images/active_profile.svg';

const HomeTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeTabsNavigator = ({navigation}) => {
  return (
    <HomeTabs.Navigator
      initialRouteName="Featured"
      tabBarOptions={{
        activeTintColor: '#0D9FEC',
      }}>
      <HomeTabs.Screen
        name="Featured"
        component={FeaturedNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveStarIcon /> : <StarIcon />,
        }}
      />
      <HomeTabs.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveSearchIcon /> : <SearchIcon />,
        }}
      />
      <HomeTabs.Screen
        name="My courses"
        component={MyCoursesNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActivePlayIcon /> : <PlayIcon />,
        }}
      />
      <HomeTabs.Screen
        name="Discussions"
        component={DiscussionsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveDiscussionsIcon /> : <DiscussionsIcon />,
        }}
      />
      <HomeTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveProfileIcon /> : <ProfileIcon />,
        }}
      />
    </HomeTabs.Navigator>
  );
};

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="HomeStack" component={HomeTabsNavigator} />
    <HomeStack.Screen name="Content" component={ContentScreen} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
