import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';

import CategoryItem from '_components/CategoryItem';
import Loader from '_components/common/Loader';

import {main, flatList} from '_styles/main';

import coursesService from '_services/courses';
import coursesActions from '_actions/courses';

import styles from './styles';

const ExploreScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const setSelectedCategorie = useCallback(
    (categorie) => dispatch(coursesActions.setSelectedCategorie(categorie)),
    [dispatch],
  );

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await coursesService.getCategories();
      setCategories(res);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleNavigate = (item) => {
    setSelectedCategorie(item);
    navigation.navigate('Explore category');
  };

  return (
    <SafeAreaView style={main.main}>
      <View style={{...main.main, ...styles.exploreContainer}}>
        <Text style={{...main.headerText, ...main.firstPartHeader}}>
          Browse{' '}
          <Text style={{...main.headerText, ...main.secondPartHeader}}>
            categories
          </Text>
        </Text>
        {categories.length > 0 ? (
          <FlatList
            style={flatList.container}
            data={categories}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleNavigate(item)}>
                <CategoryItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Loader />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
