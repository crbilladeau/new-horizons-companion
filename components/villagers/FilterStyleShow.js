import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { style } from '../../constants/style';

const FilterStyleShow = ({ filterStyle }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.smallInfo}>
        (swipe left horizontally to scroll through the options)
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={style}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                accessibilityRole='button'
                accessibilityHint='Tap to filter by selected sub-category and scroll horizontally to view all sub-category buttons'
                style={styles.filterButton}
                onPress={() => filterStyle(item)}
              >
                <Text style={styles.buttonLabel}>{item.villagerStyle}</Text>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: '#F372BB',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 10,
    width: wp('25%'),
    marginHorizontal: 2,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  buttonLabel: {
    fontFamily: 'Humming',
    color: '#fff',
    fontSize: wp('3%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  smallInfo: {
    marginTop: -5,
    marginBottom: 15,
    fontFamily: 'Calvert',
    color: '#19B5FE',
    lineHeight: 26,
    fontSize: wp('3%'),
    textAlign: 'center'
  }
});

export default FilterStyleShow;
