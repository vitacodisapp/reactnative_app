import React, {useEffect, useRef, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import Video from 'react-native-video';

import Loader from '_components/common/Loader/index';
import ModuleItem from './ModuleItem/index';

import CrossIcon from '_assets/images/cross.svg';
import Unlocked from '_assets/images/unlocked.svg';

import {setSelectedCourse} from '_redux/actions/courses';
import {main} from '_styles/main';
import styles from './styles';

const modules = [
  {title: 'Module 1. What’s Wrong with Your List', duration: '1m 12s'},
  {title: 'Module 2. Mastering Your List', duration: '1m 12s'},
  {title: 'Module 3. Scheduling', duration: '1m 12s'},
  {title: 'Module 4. End -of-Week Assessment', duration: '1m 12s'},
  {
    title: 'Module 5. More Strategies for Better Time Managment',
    duration: '1m 12s',
  },
  {
    title: 'Module 6. More Strategies for Better Time Managment',
    duration: '1m 12s',
  },
];

const ContentScreen = ({navigation}) => {
  const [video, setVideo] = useState(null);
  const [download, setDownload] = useState(false);

  const videoRef = useRef();

  const {
    courses: {selectedCourse},
  } = useSelector((store) => store);

  useEffect(() => {
    return () => setSelectedCourse(null);
  }, []);

  const getVideo = useCallback((vimeoId) => {
    setVideo(null);
    fetch(`https://player.vimeo.com/video/${vimeoId}/config`)
      .then((res) => res.json())
      .then((res) =>
        setVideo({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        }),
      )
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  useEffect(() => {
    const VIMEO_ID = '60123105';

    getVideo(VIMEO_ID);
  }, []);

  return (
    <View style={{...main.main, backgroundColor: 'rgb(58,58,58)'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.courseTitle}>
            {selectedCourse.title.rendered}
          </Text>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <CrossIcon style={{width: 16, height: 16}} />
          </TouchableWithoutFeedback>
        </View>
        {video ? (
          <Video
            source={{uri: video.videoUrl}}
            controls
            thumbnailUrl={video.thumbnailUrl}
            ref={videoRef}
            onError={(e) => console.log(e)}
            style={styles.preview}
            paused={true}
          />
        ) : (
          <View
            style={{
              ...styles.preview,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Loader size="large" />
          </View>
        )}

        <View style={styles.progressContainer}>
          <View style={styles.downloadContainer}>
            <Switch
              style={styles.switcher}
              trackColor={{false: 'rgb(139,139,139)', true: 'rgb(13,159,236)'}}
              thumbColor="rgb(255,255,255)"
              ios_backgroundColor="rgb(139,139,139)"
              onValueChange={setDownload}
              value={download}
            />
            <Text style={styles.progressText}>Download</Text>
          </View>
          <View style={styles.progressBar}>
            <Text style={styles.progressText}>Progress</Text>
            <View style={styles.progressValueContainer}>
              <Text style={styles.progressValue}>0%</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.defaultModuleContainer}>
            <View style={styles.readDot} />
            <View style={{flex: 1}}>
              <Text style={styles.defaultModuleTitle}>Introduction</Text>
              <Text style={styles.defaultModuleDuration}>1m 12s</Text>
            </View>
            <Unlocked />
          </View>

          {modules.map((item) => (
            <ModuleItem key={item.title} item={item} getVideo={getVideo} />
          ))}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Course Discussion')}>
            <View style={{...styles.defaultModuleContainer, paddingLeft: 30}}>
              <View style={{flex: 1}}>
                <Text style={styles.defaultModuleTitle}>Course Discussion</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Course Feedback')}>
            <View
              style={{
                ...styles.defaultModuleContainer,
                borderBottomWidth: 0,
                paddingLeft: 30,
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.defaultModuleTitle}>Course Feedback</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ContentScreen;
