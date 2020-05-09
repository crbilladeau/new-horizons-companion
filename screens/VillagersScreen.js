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
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import Modal from 'react-native-modal';
import SearchBar from '../components/SearchBar';
import VillagerIcon from '../components/villagers/VillagerIcon';
import FilterPicker from '../components/FilterPicker';
import FilterSpeciesShow from '../components/villagers/FilterSpeciesShow';
import FilterPersonalityShow from '../components/villagers/FilterPersonalityShow';
import FilterStyleShow from '../components/villagers/FilterStyleShow';
import SearchError from '../components/SearchError';
import { villagers } from '../database/db';

const VillagersScreen = () => {
  const [filterVillager, setFilter] = useState([]);
  const [speciesVisible, setSpeciesVisible] = useState(false);
  const [personalityVisible, setPersonalityVisible] = useState(false);
  const [styleVisible, setStyleVisible] = useState(false);
  const [error, setError] = useState(false);

  // error modal
  openError = () => {
    setError(true);
  };

  closeError = () => {
    setError(false);
  };

  // search bar state
  const [term, setTerm] = useState('');

  const alphabeticalVillagers = orderBy(
    villagers,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  const searchVillagers = term => {
    let matchingVillagers = filter(alphabeticalVillagers, item => {
      const lowerVillager = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerVillager.indexOf(lowerTerm) !== -1;
    });
    setFilter(matchingVillagers);
  };

  const findVillager = term => {
    let matchedVillager = filter(alphabeticalVillagers, item => {
      const lowerVillager = item.name.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return lowerVillager.indexOf(lowerTerm) !== -1;
    });
    let checkIfMatch = isEmpty(matchedVillager);
    if (checkIfMatch) {
      openError();
    }
    setFilter(matchedVillager);
  };

  resetList = () => {
    setFilter(villagers);
    setTerm('');
  };

  showOptions = title => {
    if (title == 'Species') {
      setSpeciesVisible(true);
      setPersonalityVisible(false);
      setStyleVisible(false);
    } else if (title == 'Personality') {
      setPersonalityVisible(true);
      setSpeciesVisible(false);
      setStyleVisible(false);
    } else if (title == 'Style') {
      setStyleVisible(true);
      setPersonalityVisible(false);
      setSpeciesVisible(false);
    }
  };

  useEffect(() => {
    setFilter(alphabeticalVillagers);
  }, []);

  filterSpecies = item => {
    const filteredBySpecies = filter(villagers, {
      species: `${item.species}`
    });
    setFilter(filteredBySpecies);
  };

  filterPersonality = item => {
    const filteredByPersonality = filter(villagers, {
      personality: `${item.personality}`
    });
    setFilter(filteredByPersonality);
  };

  filterStyle = item => {
    const filteredByStyle = filter(villagers, {
      villagerStyle: `${item.villagerStyle}`
    });
    setFilter(filteredByStyle);
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        accessibilityRole='imagebutton'
        accessibilityHint='Tap to open Villager modal'
        style={styles.villagerContainer}
      >
        <VillagerIcon
          name={item.name}
          species={item.species}
          villagerStyle={item.villagerStyle}
          image={item.image}
          birthday={item.birthday}
          personality={item.personality}
          gender={item.gender}
          starSign={item.star_sign}
          skill={item.skill}
          phrase={item.initial_phrase}
          goal={item.goal}
          color={item.fave_color}
          song={item.fave_song}
          clothes={item.fave_clothing}
          saying={item.fave_saying}
          coffee={item.type}
          milk={item.milk}
          sugar={item.sugar}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onChange={() => searchVillagers(term)}
        onTermSubmit={() => findVillager(term)}
        resetList={resetList}
      />
      <View style={styles.container}>
        <FilterPicker title='Species' showOptions={showOptions} />
        <FilterPicker title='Personality' showOptions={showOptions} />
        <FilterPicker title='Style' showOptions={showOptions} />
      </View>
      <View style={styles.subContainer}>
        {speciesVisible ? (
          <FilterSpeciesShow filterSpecies={filterSpecies} />
        ) : null}
        {personalityVisible ? (
          <FilterPersonalityShow filterPersonality={filterPersonality} />
        ) : null}
        {styleVisible ? <FilterStyleShow filterStyle={filterStyle} /> : null}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filterVillager}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={icon => icon.id}
        extraData={villagers}
        columnWrapperStyle={{ marginHorizontal: 10 }}
      />

      <View style={styles.modalContainer}>
        <Modal
          propogateSwipe
          accessibilityViewIsModal={true}
          isVisible={error}
          onBackdropPress={closeError}
          onSwipeComplete={closeError}
          swipeDirection='up'
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          animationIn='bounceIn'
          animationInTiming={300}
          // animationOutTiming={300}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modalContainer}
        >
          <SearchError accessibilityLabel='modal' closeError={closeError} />
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  villagerContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 2,
    marginTop: 10
  }
});

export default VillagersScreen;
