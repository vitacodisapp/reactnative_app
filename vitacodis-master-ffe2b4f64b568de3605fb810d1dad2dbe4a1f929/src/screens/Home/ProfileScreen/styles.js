import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhotoContainer: {
    flex: 1,
  },
  photoBackground: {
    flex: 1,
    resizeMode: 'stretch',
  },
  imageBackgroundOverlay: {
    flex: 1,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'rgba(75,75,75,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhotoContent: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  changePhotoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2D2D2D',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 4,
  },
  changePhotoText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 8,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 60,
  },
  profilePageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePage: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  crossContainer: {
    position: 'absolute',
    right: 0,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'rgba(37, 37, 37, 0.78)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileMainInfo: {
    marginTop: 18,
    alignItems: 'center',
  },
  profileName: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  profileEmail: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
  },
});

export default styles;
