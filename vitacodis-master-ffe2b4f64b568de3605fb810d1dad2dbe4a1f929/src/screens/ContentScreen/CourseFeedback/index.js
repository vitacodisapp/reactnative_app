import React, {useCallback, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import TextArea from '_components/common/TextArea/index';

import CrossIcon from '_assets/images/dark_cross.svg';

import {main} from '_styles/main';
import styles from './styles';

const answerVariants = [
  {label: 'Strongly Disagree', value: 'strongly_disagree'},
  {label: 'Disagree', value: 'disagree'},
  {label: 'Neutral', value: 'neutral'},
  {label: 'Agree', value: 'agree'},
  {label: 'Strongly Agree', value: 'strongly_agree'},
];

const interviewItems = [
  {
    id: 1,
    question: 'The course met my expectations and needs',
    value: '',
  },
  {
    id: 2,
    question: 'This course met my expectations and needs',
    value: '',
  },
  {
    id: 3,
    question: 'That course met my expectations and needs',
    value: '',
  },
  {
    id: 4,
    question: 'This course encouraged me to (please elaborate)',
    type: 'textarea',
    value: '',
  },
  {
    id: 5,
    question: 'The course encouraged me to (please elaborate)',
    type: 'textarea',
    value: '',
  },
];

const CourseFeedback = ({navigation}) => {
  const [interviewData, setInterviewDate] = useState([...interviewItems]);
  const [isCanPublishAnswers, setCanPublishAnswers] = useState(false);

  const toggleCheck = useCallback((item, answer) => {
    const updateItem = {...item, value: answer};
    const foundIndex = interviewData.findIndex((i) => i.id === item.id);

    interviewData[foundIndex] = updateItem;
    setInterviewDate([...interviewData]);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(
      'interviewData, isCanPublishAnswers',
      interviewData,
      isCanPublishAnswers,
    );
  }, [interviewData]);

  return (
    <SafeAreaView style={main.main}>
      <View
        style={{
          ...main.main,
          ...main.screen,
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Course Feedback</Text>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <CrossIcon style={{padding: 5}} />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.hintText}>
              Please submit feedback regarding the course you have just
              completed, including feedback on course structure, content and
              instructor.
            </Text>
            <View style={styles.interviewContainer}>
              {interviewData.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                  <Text style={styles.itemQuestion}>{item.question}</Text>
                  {item?.type === 'textarea' ? (
                    <View>
                      <TextArea
                        onChange={(text) => console.log('text', text)}
                      />
                    </View>
                  ) : (
                    <View style={styles.answersContainer}>
                      {answerVariants.map((answer, i) => (
                        <TouchableWithoutFeedback
                          onPress={() => toggleCheck(item, answer.value)}
                          key={answer.value}>
                          <View style={styles.radioButtonContainer}>
                            <View
                              style={[
                                styles.radioButton,
                                item.value === answer.value &&
                                  styles.activeRadio,
                              ]}
                            />
                            <Text
                              style={[
                                styles.answerLabel,
                                item.value === answer.value &&
                                  styles.activeLabel,
                              ]}>
                              {answer.label}
                            </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      ))}
                    </View>
                  )}
                </View>
              ))}
              <View style={{...styles.itemContainer, borderBottomWidth: 0}}>
                <Text style={styles.itemQuestion}>
                  May we publish you comments on the course page?
                </Text>
                <View style={styles.lastAnswersContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => setCanPublishAnswers(true)}>
                    <View style={styles.verticalRadioContainer}>
                      <View
                        style={[
                          [
                            styles.lastRadioButton,
                            isCanPublishAnswers && styles.activeRadio,
                          ],
                        ]}
                      />
                      <Text
                        style={[
                          styles.answerLabel,
                          isCanPublishAnswers && styles.activeLabel,
                        ]}>
                        Yes
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => setCanPublishAnswers(false)}>
                    <View style={styles.verticalRadioContainer}>
                      <View
                        style={[
                          [
                            styles.lastRadioButton,
                            !isCanPublishAnswers && styles.activeRadio,
                          ],
                        ]}
                      />
                      <Text
                        style={[
                          styles.answerLabel,
                          !isCanPublishAnswers && styles.activeLabel,
                        ]}>
                        No
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CourseFeedback;
