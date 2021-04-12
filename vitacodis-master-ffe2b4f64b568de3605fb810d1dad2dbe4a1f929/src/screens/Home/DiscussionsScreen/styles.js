import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  header: {
    fontFamily: 'GothamPro-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0.01,
    color: '#0D9FEC',
  },
  discussionsScrollView: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  discussionItem: {
    marginBottom: 11,
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  discussionInfo: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#333333',
  },
  author: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#8A8A8F',
  },
  date: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#333333',
  },
});

export default styles;
