import {StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
  authContainer: {
    paddingTop: 30,
    padding: 25,
  },
  authText: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 24,
    color: '#8A8A8F',
    alignSelf: 'center',
    textAlign: 'center',
  },
  socialBtnsContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  socialContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 4,
  },
  linkedContainer: {
    backgroundColor: '#3272AE',
  },
  googleContainer: {
    backgroundColor: '#FF7F77',
    marginTop: 15,
  },
  facebookContainer: {
    backgroundColor: '#3975EA',
    marginTop: 15,
  },
  socialIcon: {
    position: 'absolute',
    left: 70,
  },
});
