import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { _filter } from 'lodash';

const FilterPicker = ({ title, showOptions }) => {
  return (
    <>
      <TouchableOpacity
        accessibilityRole='button'
        accessibilityLabel='Filter by species, personality, or style'
        accessibilityHint='Tap to show sub-categories'
        style={styles.filterButton}
        onPress={() => showOptions(title)}
      >
        <Text style={styles.buttonLabel}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: '#31e69e',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginVertical: 20,
    width: wp('28%'),
    marginHorizontal: 2,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  buttonLabel: {
    fontFamily: 'Humming',
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('3.5%'),
    paddingHorizontal: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});

export default FilterPicker;
