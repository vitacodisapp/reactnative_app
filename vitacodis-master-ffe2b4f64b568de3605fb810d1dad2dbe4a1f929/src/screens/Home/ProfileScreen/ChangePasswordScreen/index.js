import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import CrossIcon from '_assets/images/dark_cross.svg';

import styles from './styles';

const ChangePasswordScreen = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setError] = useState(false);
  //   useEffect(() => {
  //     const onBlur = navigation.addListener('blur', () => navigation.goBack());
  //     return onBlur;
  //   }, []);

  const handleSavePassword = useCallback(() => {
    if (confirmPassword !== newPassword) {
      setError(true);
      return;
    }
    console.log('hello', {currentPassword, newPassword, confirmPassword});
  }, [currentPassword, newPassword, confirmPassword]);

  useEffect(() => {
    setError(false);
  }, [currentPassword, newPassword, confirmPassword]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Change password</Text>
        <TouchableWithoutFeedback
          style={{padding: 5}}
          onPress={() => navigation.goBack()}>
          <CrossIcon style={styles.crossIcon} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.changePasswordContent}>
        <View style={styles.infoItemContainer}>
          <Text style={styles.infoItemTitle}>Current Password</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            placeholder="current password"
          />
        </View>
        <View style={styles.infoItemContainer}>
          <Text style={styles.infoItemTitle}>New Password</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            placeholder="new password"
          />
        </View>
        <View style={[styles.infoItemContainer, styles.lastItem]}>
          <Text style={styles.infoItemTitle}>Confirm Password</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="confirm password"
          />
        </View>
      </View>
      {isError && (
        <Text style={styles.error}>
          New Password and Confirm Password must match
        </Text>
      )}
      <Text style={styles.changePassHint}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
      <TouchableOpacity style={styles.savePassBtn} onPress={handleSavePassword}>
        <Text style={styles.savePassBtnText}>Save Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
