import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VillagerCard = ({
  name,
  species,
  gender,
  personality,
  birthday,
  starSign,
  skill,
  villagerStyle,
  phrase,
  clothes,
  saying,
  goal,
  color,
  song,
  coffee,
  milk,
  sugar,
  image,
  closeModal
}) => {
  return (
    <>
      <View
        accessibilityHint='Tap outside this area or tap the X button to dismiss modal'
        style={styles.container}
      >
        <View style={styles.card}>
          <ScrollView contentContainerstyle={{ flex: 1, alignSelf: 'center' }}>
            <View style={styles.rightContent}>
              <View style={styles.backgroundImage}>
                <Image
                  style={styles.image}
                  resizeMode={'contain'}
                  source={image}
                />
                <Text style={styles.phrase}>"{phrase}"</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  Name: <Text style={styles.labelValue}>{name}</Text>
                </Text>
                <Text style={styles.label}>
                  Species: <Text style={styles.labelValue}>{species}</Text>
                </Text>
                <Text style={styles.label}>
                  Gender: <Text style={styles.labelValue}>{gender}</Text>
                </Text>
                <Text style={styles.label}>
                  Personality:{' '}
                  <Text style={styles.labelValue}>{personality}</Text>
                </Text>
                <Text style={styles.label}>
                  Style: <Text style={styles.labelValue}>{villagerStyle}</Text>
                </Text>
                <Text style={styles.label}>
                  Birthday: <Text style={styles.labelValue}>{birthday}</Text>
                </Text>
                <Text style={styles.label}>
                  Star Sign: <Text style={styles.labelValue}>{starSign}</Text>
                </Text>
                <Text style={styles.label}>
                  Skill: <Text style={styles.labelValue}>{skill}</Text>
                </Text>
                <Text style={styles.label}>
                  Goal: <Text style={styles.labelValue}>{goal}</Text>
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.favoritesView}>
                <View style={styles.faveHeader}>
                  <Text style={styles.favorites}>Favorites</Text>
                </View>
                <View style={styles.favoritesLayout}>
                  <Text style={styles.favesLabel}>Color:</Text>
                  <Text style={styles.labelValue}>{color}</Text>
                  <Text style={styles.favesLabel}>Song:</Text>
                  <Text style={styles.labelValue}>{song}</Text>
                  <Text style={styles.favesLabel}>Clothes:</Text>
                  <Text style={styles.labelValue}>{clothes}</Text>
                </View>
              </View>

              <View style={styles.favoritesView}>
                <View style={styles.faveHeader}>
                  <Text style={styles.favorites}>Coffee</Text>
                </View>
                <View style={styles.favoritesLayout}>
                  <Text style={styles.favesLabel}>Type:</Text>
                  <Text style={styles.labelValue}>{coffee}</Text>
                  <Text style={styles.favesLabel}>Milk:</Text>
                  <Text style={styles.labelValue}>{milk}</Text>
                  <Text style={styles.favesLabel}>Sugar:</Text>
                  <Text style={styles.labelValue}>{sugar}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </TouchableHighlight> */}
      <View style={styles.closeButtonView}>
        <TouchableOpacity
          accessibilityRole='button'
          accessibilityLabel='Tap to close villager modal'
          onPress={() => closeModal()}
          style={styles.touchableArea}
        >
          <MaterialCommunityIcons
            name='close-circle'
            style={styles.closeButton}
            size={45}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: hp('40%'),
    // // width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    // flex: 1,
    backgroundColor: '#19B5FE',
    borderRadius: 15,
    padding: 10,
    // width: wp('90%'),
    flexDirection: 'row',
    marginBottom: -10
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundImage: {
    backgroundColor: '#31e69e',
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
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
  image: {
    height: hp('17%'),
    width: wp('27%'),
    marginVertical: 5,
    alignSelf: 'center'
  },
  labelContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(214, 58, 147, 0.7)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginLeft: 15,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  phrase: {
    fontFamily: 'FinkHeavy',
    fontSize: wp('5.5%'),
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 10,
    marginHorizontal: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  label: {
    fontFamily: 'FinkHeavy',
    fontSize: wp('4.5%'),
    paddingVertical: 3,
    color: '#fff'
  },
  labelValue: {
    fontFamily: 'SecondaRegular',
    fontSize: wp('4%'),
    color: '#fff',
    marginTop: -4
  },
  favoritesView: {
    flex: 1,
    backgroundColor: '#31e69e',
    marginVertical: 20,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  faveHeader: {
    backgroundColor: '#19B5FE',
    borderRadius: 20,
    marginTop: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'center'
  },
  favoritesLayout: {
    flexDirection: 'column',
    width: wp('35%'),
    alignItems: 'center',
    backgroundColor: 'rgba(24, 158, 105, 0.4)',
    borderRadius: 20,
    padding: 8,
    margin: 2,
    paddingHorizontal: 20,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  favorites: {
    color: '#fff',
    textAlign: 'center',
    margin: 5,
    fontFamily: 'FinkHeavy',
    fontSize: wp('6%')
  },
  favesLabel: {
    fontFamily: 'FinkHeavy',
    fontSize: wp('5%'),
    paddingVertical: 6,
    color: '#fff'
  },
  touchableArea: {
    padding: 10
  },
  closeButtonView: {
    alignSelf: 'flex-end',
    paddingTop: 0,
    paddingHorizontal: 10
  },
  closeButton: {
    color: '#fff'
  }
});

export default VillagerCard;
