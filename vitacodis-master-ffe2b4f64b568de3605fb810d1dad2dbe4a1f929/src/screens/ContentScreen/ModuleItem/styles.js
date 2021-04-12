import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  moduleHeaderContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgb(92,92,92)',
    borderBottomWidth: 1,
  },
  moduleTitle: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(255,255,255)',
  },
  duration: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: 'rgb(138,138,143)',
  },
  readDot: {
    height: 10,
    width: 10,
    marginRight: 10,
    backgroundColor: 'rgb(139, 139, 139)',
    borderRadius: 50,
  },
  moduleTitleContainer: {
    flex: 1,
  },
  stepContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(38,38,38)',
    borderBottomColor: 'rgb(92,92,92)',
    borderBottomWidth: 1,
  },
  stepTitle: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(255,255,255)',
  },
});

export default styles;
