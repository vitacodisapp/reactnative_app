import React, {useCallback} from 'react';

import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';

import FacebookIcon from '_assets/images/facebookIcon.svg';
import TwitterIcon from '_assets/images/twitterIcon.svg';
import YoutubeIcon from '_assets/images/youtubeIcon.svg';
import InstagramIcon from '_assets/images/instagramIcon.svg';
import PptIcon from '_assets/images/ppt_icon.svg';
import PdfIcon from '_assets/images/pdf_icon.svg';
import DownloadIcon from '_assets/images/download_icon.svg';
import imageUrl from '_assets/images/Healthy.png';

import {main} from '_styles/main';
import {common, aboutTabStyles} from '../styles';

const resources = [
  {
    title: 'Donec eu nibh et quam lacinia molestie eget',
    type: 'ppt',
    author: 'Elke Van Hoof, April 9th, 2020',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    type: 'download',
    author: 'Elke Van Hoof, April 9th, 2020',
  },
  {
    title: 'Suspendisse condimentum nec mauris',
    type: 'pdf',
    author: 'Elke Van Hoof, April 9th, 2020',
  },
  {
    title:
      'Curabitur scelerisque turpis orci, vitae tristique sapien auctor nec celerisque turpis',
    type: 'pdf',
    author: 'Elke Van Hoof, April 9th, 2020',
  },
];

const AboutTab = () => {
  const getTypeIcon = useCallback((type) => {
    switch (type) {
      case 'ppt':
        return <PptIcon style={aboutTabStyles.resourceType} />;
      case 'download':
        return <DownloadIcon style={aboutTabStyles.resourceType} />;
      case 'pdf':
        return <PdfIcon style={aboutTabStyles.resourceType} />;
      default:
        break;
    }
  }, []);

  return (
    <SafeAreaView style={main.main}>
      <ScrollView style={{padding: 15}}>
        <View style={{padding: 10}}>
          <Text style={common.paragraph}>About</Text>
          <Text style={common.text}>
            Learn all the core nutrition concepts on how to evaluate food
            choices and to develop healthy eating patterns and your nutrition
            for the best health. This nutrition course will help the
            participants to understand the scientific basis of human nutrition.
          </Text>
          <Text style={common.paragraph}>About</Text>
          <Text style={common.text}>
            Learn all the core nutrition concepts on how to evaluate food
            choices and to develop healthy eating patterns and your nutrition
            for the best health. This nutrition course will help the
            participants to understand the scientific basis of human nutrition.
          </Text>
          <Text style={common.paragraph}>About</Text>
          <Text style={common.text}>
            Learn all the core nutrition concepts on how to evaluate food
            choices and to develop healthy eating patterns and your nutrition
            for the best health. This nutrition course will help the
            participants to understand the scientific basis of human nutrition.
          </Text>
          <Text style={common.paragraph}>Instructor</Text>
          <View style={aboutTabStyles.instructorContainer}>
            <Image style={aboutTabStyles.instructorImage} source={imageUrl} />
            <View style={aboutTabStyles.instructorInfo}>
              <Text style={aboutTabStyles.instructorName}>
                Sarah Lichter (Canada)
              </Text>
              <Text style={aboutTabStyles.instructorPosition}>
                Wellbeing consultant and an international stress management{' '}
              </Text>
              <View style={aboutTabStyles.instructorContacts}>
                <FacebookIcon />
                <TwitterIcon />
                <YoutubeIcon />
                <InstagramIcon />
              </View>
            </View>
          </View>
          <Text style={common.text}>
            Learn all the core nutrition concepts on how to evaluate food
            choices and to develop healthy eating patterns and your nutrition
            for the best health. This nutrition course will help the
            participants to understand the scientific basis of human nutrition.
          </Text>
          <View
            style={{
              borderBottomColor: '#F0F0F0',
              marginTop: 15,
              marginBottom: 15,
              borderBottomWidth: 1,
            }}
          />
          <Text style={common.paragraph}>Resources</Text>
          <View style={aboutTabStyles.resourcesContainer}>
            {resources.map((resource) => (
              <View key={resource.title} style={aboutTabStyles.resourceContent}>
                {getTypeIcon(resource.type)}
                <View style={aboutTabStyles.resourceInfo}>
                  <Text style={aboutTabStyles.resourceTitle}>
                    {resource.title}
                  </Text>
                  <Text style={aboutTabStyles.resourceAuthor}>
                    {resource.author}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutTab;
