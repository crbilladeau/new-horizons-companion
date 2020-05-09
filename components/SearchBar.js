import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({
  term,
  onTermChange,
  onChange,
  onTermSubmit,
  resetList
}) => {
  return (
    <>
      <View style={styles.background}>
        <Feather
          accessibilityLabel='search icon'
          name='search'
          style={styles.icon}
        />
        <TextInput
          selectTextOnFocus={true}
          accessibilityRole='search'
          accessibilityLabel='Tap and type to search the list'
          style={styles.input}
          placeholder='Search by name'
          placeholderTextColor='#fff'
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType='search'
          keyboardType='default'
          // autoFocus
          // defaultValue={}
          value={term}
          // onFocus={() => resetList()}
          onKeyPress={onChange}
          onChangeText={onTermChange}
          onSubmitEditing={onTermSubmit}
          clearTextOnFocus
        />
        <TouchableOpacity
          accessibilityRole='button'
          onPress={() => resetList()}
          style={{ alignSelf: 'center' }}
        >
          <Feather
            accessibilityLabel='Tap to clear search field'
            name='x-circle'
            style={styles.clearButton}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  background: {
    backgroundColor: '#ff69b0',
    borderRadius: 5,
    flexDirection: 'row',
    height: hp('7%'),
    paddingHorizontal: 10,
    marginHorizontal: 18,
    marginTop: 20
  },
  icon: {
    fontSize: wp('6%'),
    color: '#fff',
    alignSelf: 'center',
    paddingRight: 10
  },
  input: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Calvert',
    fontSize: hp('2.5%')
  },
  clearButton: {
    fontSize: wp('6%'),
    color: '#fff'
  }
});

export default SearchBar;
