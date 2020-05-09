import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const SearchError = ({ closeError }) => {
  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity accessibilityHint='Swipe up, tap outside this area, or tap the OK button to dismiss modal'>
          <View style={styles.rightContent}>
            <Text style={styles.label}>
              Sorry, nothing matches that search criteria. Please try a
              different search term.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole='button'
          accessibilityHint='Tap to dismiss modal'
          onPress={() => closeError()}
        >
          <View style={styles.closeButtonView}>
            <Text style={styles.closeButton}>OK</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#19B5FE',
    borderRadius: 15,
    width: wp('70%'),
    height: hp('50%'),
    flexDirection: 'column',
    alignSelf: 'center'
  },

  rightContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    paddingVertical: 30,
    marginHorizontal: 16,
    borderRadius: 15,
    backgroundColor: '#ff69b0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  label: {
    fontFamily: 'Humming',
    fontSize: wp('4%'),
    paddingHorizontal: 10,
    color: '#fff',
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textAlign: 'center'
  },

  closeButtonView: {
    backgroundColor: '#31e69e',
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginVertical: 20,
    width: wp('30%'),
    marginHorizontal: 2,
    marginTop: 30,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  closeButton: {
    fontFamily: 'Humming',
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('4%'),
    paddingHorizontal: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});

export default SearchError;
