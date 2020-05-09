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
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatchIcon from '../components/catch/CatchIcon';
import { ErrorModal } from '../components/ErrorModal';
import { bugs } from '../constants/bugs';
import Constants from 'expo-constants';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';

const BugScreen = () => {
  const [filterBug, setFilter] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);

  // error modal
  openError = () => {
    setError(true);
  };

  closeError = () => {
    setError(false);
  };

  const alphabeticalBugs = orderBy(
    bugs,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  useEffect(() => {
    setFilter(alphabeticalBugs);
  }, []);

  const findBug = term => {
    let matchingBugs = filter(alphabeticalBugs, item => {
      const lowerBugs = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerBugs.indexOf(lowerTerm) !== -1;
    });
    let checkIfMatch = isEmpty(matchingBugs);
    if (checkIfMatch) {
      openError();
    }
    setFilter(matchingBugs);
  };

  const searchBugs = term => {
    let matchingBugs = filter(alphabeticalBugs, item => {
      const lowerBugs = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerBugs.indexOf(lowerTerm) !== -1;
    });
    setFilter(matchingBugs);
  };

  resetBugList = () => {
    setFilter(alphabeticalBugs);
    setTerm('');
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole='imagebutton'
        accessibilityHint='Tap to show bug modal'
        style={styles.itemContainer}
      >
        <CatchIcon
          name={item.name}
          price={item.price}
          location={item.location}
          image={item.image}
          time={item.time}
          months={item.months}
          north_months={item.north_months}
          south_months={item.south_months}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onChange={() => searchBugs(term)}
        onTermSubmit={() => findBug(term)}
        resetList={resetBugList}
      />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterBug}
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

export default BugScreen;
