import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
  discussionsListContainer: {
    marginHorizontal: 15,
    marginBottom: 40,
  },
  leaveCommentContainer: {
    marginHorizontal: 15,
  },
  leaveText: {
    fontFamily: 'GothamPro-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.01,
    color: '#4A4A4A',
    marginBottom: 10,
  },
  submitBtn: {
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: '#0D9FEC',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
  },
  submitText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default styles;
