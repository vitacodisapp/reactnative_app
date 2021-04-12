import {StyleSheet} from 'react-native';

const input = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid',
    borderRadius: 2,
    paddingRight: 17,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    flex: 1,
  },
  error: {
    alignSelf: 'flex-end',
    marginBottom: 5,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FB5353',
  },
});

export default input;
