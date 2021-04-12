import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';

import UserIcon from '_assets/images/edit-profile_icon.svg';
import QuestionIcon from '_assets/images/help_support-icon.svg';
import ShieldIcon from '_assets/images/legal-info-icon.svg';
import RightChevron from '_assets/images/right-chevron_black.svg';

import styles from './styles';

const MainProfileContent = ({setEditing, handleLogout, navigation}) => {
  return (
    <View style={styles.profileContent}>
      <View style={styles.profileContentItemsContainer}>
        <TouchableWithoutFeedback onPress={() => setEditing(true)}>
          <View style={styles.profileContentItem}>
            <View style={styles.itemTitleContainer}>
              <UserIcon style={styles.itemIcon} />
              <Text style={styles.contentItemTitle}>Edit Profile</Text>
            </View>
            <RightChevron />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Help and Support')}>
          <View style={styles.profileContentItem}>
            <View style={styles.itemTitleContainer}>
              <QuestionIcon style={styles.itemIcon} />
              <Text style={styles.contentItemTitle}>Help & Support</Text>
            </View>
            <RightChevron />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log('legal')}>
          <View style={{...styles.profileContentItem, borderBottomWidth: 0}}>
            <View style={styles.itemTitleContainer}>
              <ShieldIcon style={styles.itemIcon} />
              <Text style={styles.contentItemTitle}>Legal Information</Text>
            </View>
            <RightChevron />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={handleLogout}>
        <View style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log out</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MainProfileContent;
