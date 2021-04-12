import React, {useMemo, useCallback, useState, useRef, useEffect} from 'react';
import Toast from 'react-native-toast-message'
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import LinkedInModal from 'react-native-linkedin';
import {GoogleSignin} from 'react-native-google-signin';

import {main} from '_styles/main';
import {authStyles} from '_styles/auth';
import Input from '_components/common/Input/index';
import Loader from '../../components/common/Loader';

import EmailIcon from '_assets/images/email.svg';
import ErrorEmailIcon from '_assets/images/error_email.svg';
import EyeIcon from '_assets/images/eye_open.svg';
import ErrorEyeIcon from '_assets/images/error_eye_open.svg';
import ClosedEyeIcon from '_assets/images/eye-off.svg';
import ErrorClosedEye from '_assets/images/error_eye_off.svg';
import LinkedInIcon from '_assets/images/linkedin.svg';
import GoogleIcon from '_assets/images/Google_logo.svg';
import FacebookIcon from '_assets/images/Facebook_logo.svg';
import AppLogo from '_assets/images/app-logo.png';

import authService from '_services/auth';
import authActions from '_actions/auth';
import {setTokenToAxios} from '../../helpers/auth';

import {emailRegExp} from '_constants/regexp';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSecurePassword, setSecurePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const linkedInRef = useRef();

  const dispatch = useDispatch();

  const handleChangeForm = useCallback(
    (field, value) => {
      setForm({
        ...form,
        [field]: value,
      });
    },
    [form],
  );

  useEffect(() => {
    setPasswordError('');
  }, [form.password]);

  const setCurrentUser = useCallback(
    (currentUser) => dispatch(authActions.setCurrentUser(currentUser)),
    [dispatch],
  );

  const Eye = useMemo(() => {
    if (isSecurePassword) {
      return passwordError ? <ErrorEyeIcon /> : <EyeIcon />;
    }
    return passwordError ? <ErrorClosedEye /> : <ClosedEyeIcon />;
  }, [isSecurePassword, passwordError]);

  const linkedInButton = useCallback(
    () => (
      <TouchableOpacity
        style={{...authStyles.socialContainer, ...authStyles.linkedContainer}}
        onPress={() => linkedInRef.current.open()}>
        <LinkedInIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>LinkedIn</Text>
      </TouchableOpacity>
    ),
    [],
  );
  const googleButton = useMemo(
    () => (
      <TouchableOpacity
        style={{
          ...authStyles.socialContainer,
          ...authStyles.googleContainer,
        }}>
        <GoogleIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>Google</Text>
      </TouchableOpacity>
    ),
    [],
  );
  const facebookButton = useMemo(
    () => (
      <TouchableOpacity
        style={{
          ...authStyles.socialContainer,
          ...authStyles.facebookContainer,
        }}>
        <FacebookIcon style={authStyles.socialIcon} />
        <Text style={main.authBtnText}>Facebook</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const checkEmail = useCallback(
    (text) => {
      handleChangeForm('email', text);
      if (!emailRegExp.test(text)) {
        setEmailError('Please check the spelling of email address');
      } else {
        setEmailError('');
      }
    },
    [handleChangeForm],
  );

  const handleLogin = useCallback(async () => {
    setPasswordError('');

    if (form.password.trim() === '') {
      setPasswordError('Password cannot be blank!');
      return;
    }
    if (form.password.trim().length < 8) {
      setPasswordError('Password should contain at least 8 sympols');
      return;
    }

    setLoading(true);

    try {
      const res = await authService.login({
        username: form.email,
        password: form.password,
      });

      setTokenToAxios(res.token);

      const myUser = await authService.getMyUser();

      setCurrentUser({...res, id: myUser.id});

      navigation.replace('Home');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
        autoHide: true,
        topOffset: 40,
        visibilityTime: 4000,
      });
    }

    setLoading(false);
  }, [navigation, form.password]);

  return (
    <SafeAreaView style={main.main}>
      <ScrollView>
        <View style={{...main.main, ...authStyles.authContainer}}>
          <Image source={AppLogo} style={main.logo} />
          <Text style={main.authTitle}>User Login</Text>
          <View>
            <Input
              placeholder="Email Address"
              icon={
                form.email !== '' && emailError ? (
                  <ErrorEmailIcon />
                ) : (
                  <EmailIcon />
                )
              }
              textContentType="emailAddress"
              onChangeText={(text) => checkEmail(text)}
              value={form.email}
              errorValidation={form.email !== '' && emailError}
              style={{marginTop: 20}}
            />
            <Input
              placeholder="Password"
              secureTextEntry={isSecurePassword}
              icon={
                <TouchableOpacity
                  onPress={() => setSecurePassword(!isSecurePassword)}>
                  {Eye}
                </TouchableOpacity>
              }
              textContentType="password"
              onChangeText={(text) => handleChangeForm('password', text)}
              value={form.password}
              errorValidation={passwordError}
              style={{marginTop: 20}}
            />
          </View>
          <Text
            style={authStyles.authText}
            onPress={() => navigation.navigate('Forgot password')}>
            Forgot a password?
          </Text>
          <TouchableOpacity style={main.authBtnContainer} onPress={handleLogin}>
            {isLoading ? (
              <Loader size="small" color="#FFFFFF" />
            ) : (
              <Text style={main.authBtnText}>Log in</Text>
            )}
          </TouchableOpacity>
          <Text style={authStyles.authText}>
            Do not have an account?{' '}
            <Text
              style={main.link}
              onPress={() => navigation.replace('SignUp')}>
              Sign up
            </Text>
          </Text>
          <Text style={authStyles.authText}>Or login with</Text>
          <View style={authStyles.socialBtnsContainer}>
            <LinkedInModal
              ref={linkedInRef}
              clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
              clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
              redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
              onSuccess={(token) => console.log(token)}
              renderButton={linkedInButton}
            />

            {googleButton}
            {facebookButton}
            {/* <Button
            title="Log Out"
            onPress={this.linkedRef.current.logoutAsync()}
          /> */}
          </View>
          <Text style={authStyles.authText}>
            By continuing, you agree to our{' '}
            <Text
              style={main.link}
              onPress={() => console.log('privacy police :>> ')}>
              {' '}
              Privacy Policy{' '}
            </Text>
            and
            <Text
              style={main.link}
              onPress={() => console.log('term of ise :>> ')}>
              {' '}
              Terms of Use{' '}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
