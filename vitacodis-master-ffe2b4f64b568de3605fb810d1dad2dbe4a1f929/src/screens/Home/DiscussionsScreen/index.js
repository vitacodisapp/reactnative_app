import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';

import AddIcon from '_assets/images/add_discussion_icon.svg';
import Avatar1 from '_assets/images/discussion_avatar.png';
import Avatar2 from '_assets/images/discussion_avatar-2.png';
import Avatar3 from '_assets/images/discussion_avatar-3.png';

import styles from './styles';

const discussions = [
  {
    id: 1,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar1,
  },
  {
    id: 2,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar2,
  },
  {
    id: 3,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar3,
  },
  {
    id: 4,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar1,
  },
  {
    id: 5,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar2,
  },
  {
    id: 6,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar3,
  },
  {
    id: 7,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar1,
  },
  {
    id: 8,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar2,
  },
  {
    id: 9,
    title: 'Amet minim mollit non deserunt ',
    author: 'Courtney Henry',
    date: 'May 21,2020',
    avatar: Avatar3,
  },
];

const DiscussionsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Discussions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('New discussion')}>
          <AddIcon />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.discussionsScrollView}>
        <View style={styles.discussionsContainer}>
          {discussions.map((discussion) => (
            <TouchableOpacity
              key={discussion.id}
              onPress={() => navigation.navigate('Discussion content')}>
              <View style={styles.discussionItem}>
                <Image style={styles.avatar} source={discussion.avatar} />
                <View style={styles.discussionInfo}>
                  <Text style={styles.title}>{discussion.title}</Text>
                  <Text style={styles.author}>{discussion.author}</Text>
                  <Text style={styles.date}>{discussion.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscussionsScreen;
