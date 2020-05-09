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
import { sea } from '../constants/sea';
import Constants from 'expo-constants';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';

const SeaScreen = () => {
  const [filterSea, setFilter] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);

  // error modal
  openError = () => {
    setError(true);
  };

  closeError = () => {
    setError(false);
  };

  const alphabeticalSea = orderBy(
    sea,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  useEffect(() => {
    setFilter(alphabeticalSea);
  }, []);

  const findSea = term => {
    let matchingSea = filter(alphabeticalSea, item => {
      const lowerSea = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerSea.indexOf(lowerTerm) !== -1;
    });
    let checkIfMatch = isEmpty(matchingSea);
    if (checkIfMatch) {
      openError();
    }
    setFilter(matchingSea);
  };

  const searchSea = term => {
    let matchingSea = filter(alphabeticalSea, item => {
      const lowerSea = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerSea.indexOf(lowerTerm) !== -1;
    });
    setFilter(matchingSea);
  };

  resetSeaList = () => {
    setFilter(alphabeticalSea);
    setTerm('');
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole='imagebutton'
        accessibilityHint='Tap to show sea creature modal'
        style={styles.itemContainer}
      >
        <CatchIcon
          name={item.name}
          price={item.price}
          size={item.size}
          location={item.location}
          image={item.image}
          time={item.time}
          months={item.months}
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
        onChange={() => searchSea(term)}
        onTermSubmit={() => findSea(term)}
        resetList={resetSeaList}
      />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterSea}
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

export default SeaScreen;
