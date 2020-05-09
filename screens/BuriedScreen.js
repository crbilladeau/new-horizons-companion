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
import { buried } from '../constants/buriedcreatures';
import Constants from 'expo-constants';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';

const BuriedScreen = () => {
  const [filterBuried, setFilter] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);

  // error modal
  openError = () => {
    setError(true);
  };

  closeError = () => {
    setError(false);
  };

  const alphabeticalBuried = orderBy(
    buried,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  useEffect(() => {
    setFilter(alphabeticalBuried);
  }, []);

  const findBuried = term => {
    let matchingBuried = filter(alphabeticalBuried, item => {
      const lowerBuried = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerBuried.indexOf(lowerTerm) !== -1;
    });
    let checkIfMatch = isEmpty(matchingBuried);
    if (checkIfMatch) {
      openError();
    }
    setFilter(matchingBuried);
  };

  const searchBuried = term => {
    let matchingBuried = filter(alphabeticalBuried, item => {
      const lowerBuried = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerBuried.indexOf(lowerTerm) !== -1;
    });
    setFilter(matchingBuried);
  };

  resetBuriedList = () => {
    setFilter(alphabeticalBuried);
    setTerm('');
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole='imagebutton'
        accessibilityHint='Tap to show buried creature modal'
        style={styles.itemContainer}
      >
        <CatchIcon
          name={item.name}
          price={item.price}
          size={item.size}
          location={item.location}
          image={item.image}
          type={item.type}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onChange={() => searchBuried(term)}
        onTermSubmit={() => findBuried(term)}
        resetList={resetBuriedList}
      />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterBuried}
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

export default BuriedScreen;
