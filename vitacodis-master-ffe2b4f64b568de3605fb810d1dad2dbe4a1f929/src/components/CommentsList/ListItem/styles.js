import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemInfo: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemAvatar: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  mainInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  authorContainer: {
    flex: 1,
  },
  author: {
    marginBottom: 5,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
  date: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 23,
    color: '#333333',
    textAlign: 'justify',
  },
});

export default styles;
