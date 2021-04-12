import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import RightChevron from '_assets/images/right_chevron.svg';

import styles from './styles';

const moduleSteps = [
  {
    title: 'Amet minim mollit non deserunt ullamco enostrud amet.',
    duration: '1m 12s',
  },
  {
    title:
      'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.',
    duration: '1m 12s',
  },
  {
    title: 'Exercitation veniam consequat sunt nostrud amet.',
    duration: '1m 12s',
  },
];

const ModuleItem = ({item, getVideo}) => {
  const [isShowModuleContent, setShowModuleContent] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => setShowModuleContent(!isShowModuleContent)}>
        <View style={styles.moduleHeaderContainer}>
          <View style={styles.readDot} />
          <View style={styles.moduleTitleContainer}>
            <Text style={styles.moduleTitle}>{item.title}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
          <RightChevron />
        </View>
      </TouchableWithoutFeedback>
      {isShowModuleContent && (
        <View>
          {moduleSteps.map((step) => (
            <TouchableWithoutFeedback
              key={step.title}
              onPress={() => getVideo('172825105')}>
              <View style={styles.stepContainer}>
                <View style={styles.readDot} />
                <View>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.duration}>{step.duration}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      )}
    </View>
  );
};

export default ModuleItem;
