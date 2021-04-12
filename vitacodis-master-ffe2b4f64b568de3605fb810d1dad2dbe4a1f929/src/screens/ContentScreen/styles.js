import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseTitle: {
    width: '90%',
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: '#ffffff',
  },
  preview: {
    width: '100%',
    aspectRatio: 1.778,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#8A8A8F',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switcher: {
    marginRight: 15,
  },
  progressValueContainer: {
    paddingVertical: 4,
    paddingHorizontal: 11,
    backgroundColor: '#8B8B8B',
    borderRadius: 40,
    marginLeft: 8,
  },
  progressValue: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  defaultModuleContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgb(92,92,92)',
    borderBottomWidth: 1,
  },
  defaultModuleTitle: {
    fontFamily: 'OpenSans-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(255,255,255)',
  },
  defaultModuleDuration: {
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
});

export default styles;
