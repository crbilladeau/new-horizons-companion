import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import CatchIcon from '../components/catch/CatchIcon';
import { ErrorModal } from '../components/ErrorModal';
import { fish } from '../constants/fish';
import Constants from 'expo-constants';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';

const FishScreen = () => {
  const [filterFish, setFilter] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);

  // error modal
  openError = () => {
    setError(true);
  };

  closeError = () => {
    setError(false);
  };

  const alphabeticalFish = orderBy(
    fish,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  useEffect(() => {
    setFilter(alphabeticalFish);
  }, []);

  const findFish = term => {
    let matchingFish = filter(alphabeticalFish, item => {
      const lowerFish = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerFish.indexOf(lowerTerm) !== -1;
    });
    let checkIfMatch = isEmpty(matchingFish);
    if (checkIfMatch) {
      openError();
    }
    setFilter(matchingFish);
  };

  const searchFish = term => {
    let matchingFish = filter(alphabeticalFish, item => {
      const lowerFish = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerFish.indexOf(lowerTerm) !== -1;
    });
    setFilter(matchingFish);
  };

  resetFishList = () => {
    setFilter(alphabeticalFish);
    setTerm('');
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole='imagebutton'
        accessibilityHint='Tap to show fish modal'
        style={styles.itemContainer}
      >
        <CatchIcon
          name={item.name}
          price={item.price}
          size={item.size}
          location={item.location}
          image={item.image}
          time={item.time}
          north_months={item.north_months}
          south_months={item.south_months}
        >
          <Text>{item.name}</Text>
        </CatchIcon>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onChange={() => searchFish(term)}
        onTermSubmit={() => findFish(term)}
        resetList={resetFishList}
      />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterFish}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={icon => icon.id}
        />
      </View>
      <>
        <ErrorModal error={error} closeError={closeError} />
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight
  },
  itemContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 2,
    padding: 2,
    marginTop: 10
  }
});

export default FishScreen;
