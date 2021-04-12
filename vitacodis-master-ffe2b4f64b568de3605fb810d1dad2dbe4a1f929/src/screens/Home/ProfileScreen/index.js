import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import authActions from '_actions/auth';

import CrossIcon from '_assets/images/cross.svg';

import MainProfileContent from './MainProfileContent/index';

import {removeTokenFromAxios} from '../../../helpers/auth';
import authService from '_services/auth';

import {main} from '_styles/main';
import styles from './styles';
import EditProfileContent from './EditProfileContent/index';
import Loader from '_components/common/Loader';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [userImage, setUserImage] = useState(null);

  const resetAuth = useCallback(() => dispatch(authActions.resetAuth()), [
    dispatch,
  ]);

  const {
    auth: {currentUser},
  } = useSelector((store) => store);

  const [isEditing, setEditing] = useState(false);

  const getMyInfo = async () => {
    try {
      const res = await authService.getMyUser();
      console.log('res', res);
      setUserImage(res.avatar_urls['96']);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const handleLogout = () => {
    resetAuth();
    removeTokenFromAxios();
    navigation.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
  };

  return (
    <View
      style={{
        ...main.main,
      }}>
      <View style={styles.profilePhotoContainer}>
        {userImage === null ? (
          <Loader
            size="large"
            styles={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              padding: 10,
            }}
          />
        ) : (
          <ImageBackground
            source={{uri: userImage}}
            style={styles.photoBackground}
            blurRadius={2}>
            <View style={styles.imageBackgroundOverlay}>
              <View style={styles.profilePageContainer}>
                {isEditing ? (
                  <Text style={styles.profilePage}>Edit profile</Text>
                ) : (
                  <Text style={styles.profilePage}>My profile</Text>
                )}
                {isEditing && (
                  <TouchableWithoutFeedback onPress={() => setEditing(false)}>
                    <View style={styles.crossContainer}>
                      <CrossIcon />
                    </View>
                  </TouchableWithoutFeedback>
                )}
              </View>
              <View style={styles.profilePhotoContent}>
                <Image source={{uri: userImage}} style={styles.profilePhoto} />
                {isEditing && (
                  <View style={styles.changePhotoContainer}>
                    <Text style={styles.changePhotoText}>Change</Text>
                  </View>
                )}
              </View>
              {!isEditing && (
                <View style={styles.profileMainInfo}>
                  <Text style={styles.profileName}>
                    {currentUser.user_display_name}
                  </Text>
                  <Text style={styles.profileEmail}>
                    {currentUser.user_email}
                  </Text>
                </View>
              )}
            </View>
          </ImageBackground>
        )}
      </View>
      {isEditing ? (
        <EditProfileContent
          user={currentUser}
          setEditing={setEditing}
          navigation={navigation}
        />
      ) : (
        <MainProfileContent
          setEditing={setEditing}
          handleLogout={handleLogout}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default ProfileScreen;
