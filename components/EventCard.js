import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EventCard = ({ name, icon, time, description, closeEventModal }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Image style={styles.image} resizeMode={'contain'} source={icon} />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>
                Name: <Text style={styles.labelValue}>{name}</Text>
              </Text>
              <Text style={styles.label}>
                Time: <Text style={styles.labelValue}>{time}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.closeButtonView}>
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityLabel='Tap to close villager modal'
            onPress={() => closeEventModal()}
          >
            <MaterialCommunityIcons
              name='close-circle'
              style={styles.closeButton}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // width: wp('70%'),
    // height: hp('70%')
  },
  card: {
    backgroundColor: '#72F3AA',
    borderRadius: 15,
    width: wp('70%'),
    height: hp('50%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
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
    width: wp('20%'),
    height: hp('20%'),
    margin: 10
  },
  labelContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(214, 58, 147, 0.7)',
    borderRadius: 20,
    paddingVertical: 10,
    margin: 5,
    paddingHorizontal: 10,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  label: {
    fontFamily: 'Humming',
    fontSize: wp('3.5%'),
    // lineHeight: 20,
    color: '#fff'
  },
  labelValue: {
    fontFamily: 'SecondaRegular',
    fontSize: wp('3.5%'),
    // lineHeight: 20,
    color: '#fff'
  },
  closeButtonView: {
    alignSelf: 'flex-end',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  closeButton: {
    color: '#fff'
  }
});

export default EventCard;
