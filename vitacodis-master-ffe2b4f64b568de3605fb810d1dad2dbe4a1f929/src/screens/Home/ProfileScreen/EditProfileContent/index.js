import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Text,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import RightChevron from '_assets/images/right-chevron_black.svg';

import styles from './styles';

const personalInformationFields = [
  {label: 'First name', key: 'first_name', type: 'username'},
  {label: 'Last name', key: 'last_name', type: 'username'},
  {label: 'Email Address', key: 'email', type: 'email'},
  {label: 'Phone Number', key: 'phone', type: 'tel'},
  {label: 'Birthday', key: 'birthday', type: 'username'},
  {label: 'City', key: 'city', type: 'username'},
  {label: 'Country', key: 'country', type: 'username'},
];

const DEFAULT_BIRTHDAY = '01.01.1960';

const EditProfileContent = ({setEditing, user, navigation}) => {
  const [personalInfoForm, setPersonalInfoForm] = useState({
    first_name: user.user_display_name,
    last_name: 'Kuzma',
    email: user.user_email,
    phone: '+38 066 697 17 18',
    birthday: '30.10.1999',
    city: 'Uzhhorod',
    country: 'Ukraine',
  });

  //   useEffect(() => {
  //     const onBlur = navigation.addListener('blur', () => setEditing(false));
  //     return onBlur;
  //   }, []);

  const handleChange = useCallback(
    (key, text) => {
      if (key === 'birthday') {
        const textArr = text.split('.');
        if (parseInt(textArr[0]) > 31 || parseInt(textArr[1]) > 12) {
          setPersonalInfoForm({
            ...personalInfoForm,
            birthday: DEFAULT_BIRTHDAY,
          });
          return;
        }
      }
      setPersonalInfoForm({...personalInfoForm, [key]: text});
    },
    [personalInfoForm],
  );

  const handleBirthdayBlur = useCallback(() => {
    if (!personalInfoForm.birthday) {
      setPersonalInfoForm({...personalInfoForm, birthday: DEFAULT_BIRTHDAY});
    }
  }, [personalInfoForm]);

  const getItemInput = useCallback(
    (item) => {
      if (item.key === 'birthday') {
        return (
          <TextInputMask
            style={styles.input}
            onChangeText={(formatted, extracted) =>
              handleChange(item.key, extracted)
            }
            value={personalInfoForm[item.key]}
            onBlur={handleBirthdayBlur}
            mask="[00]{.}[00]{.}[9900]"
          />
        );
      }
      if (item.key === 'phone') {
        return (
          <TextInputMask
            style={styles.input}
            onChangeText={(formatted, extracted) =>
              handleChange(item.key, extracted)
            }
            value={personalInfoForm[item.key]}
            mask="+[00] ([000]) [000] [00] [00]"
          />
        );
      }
      return (
        <TextInput
          autoCompleteType={item.type}
          style={styles.input}
          value={personalInfoForm[item.key]}
          onChangeText={(text) => handleChange(item.key, text)}
        />
      );
    },
    [personalInfoForm],
  );

  return (
    <View style={styles.editProfileContainer}>
      <ScrollView>
        <View style={styles.editProfileHeader}>
          <Text style={styles.title}>Personal Information</Text>
          <Text style={styles.save} onPress={() => setEditing(false)}>
            Save
          </Text>
        </View>
        <View style={styles.editInfoContent}>
          {personalInformationFields.map((item, i) => (
            <View
              key={item.key}
              style={[
                styles.infoItemContainer,
                i === personalInformationFields.length - 1 && styles.lastItem,
              ]}>
              <Text style={styles.infoItemTitle}>{item.label}:</Text>
              {getItemInput(item)}
            </View>
          ))}
        </View>
        <Text style={{...styles.title, marginLeft: 15, marginTop: 23}}>
          Account Settings
        </Text>
        <View style={styles.editInfoContent}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Change password')}>
            <View style={styles.infoItemContainer}>
              <Text style={styles.accountSettingsTitile}>Change Password</Text>
              <RightChevron />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => console.log('Account Privacy')}>
            <View style={{...styles.infoItemContainer, borderBottomWidth: 0}}>
              <Text style={styles.accountSettingsTitile}>Account Privacy</Text>
              <RightChevron />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileContent;
