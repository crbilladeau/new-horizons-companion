import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CatchCard = ({
  name,
  price,
  size,
  location,
  time,
  type,
  months,
  north_months,
  south_months,
  image,
  closeModal
}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight accessibilityHint='Swipe up, tap outside this area, or tap the X button to dismiss modal'>
        <View style={styles.card}>
          <View style={styles.backgroundImage}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              Name: <Text style={styles.labelValue}>{name}</Text>
            </Text>
            <Text style={styles.label}>
              Price: <Text style={styles.labelValue}>{price} bells</Text>
            </Text>
            {location ? (
              <Text style={styles.label}>
                Location: <Text style={styles.labelValue}>{location}</Text>
              </Text>
            ) : null}
            {type ? (
              <Text style={styles.label}>
                Type: <Text style={styles.labelValue}>{type}</Text>
              </Text>
            ) : null}
            {size ? (
              <Text style={styles.label}>
                Size: <Text style={styles.labelValue}>{size}</Text>
              </Text>
            ) : null}
            {time ? (
              <Text style={styles.label}>
                Time of Day: <Text style={styles.labelValue}>{time}</Text>
              </Text>
            ) : null}
            {months ? (
              <Text style={styles.label}>
                Months: <Text style={styles.labelValue}>{months}</Text>
              </Text>
            ) : null}
            {north_months ? (
              <Text style={styles.label}>
                Northern Hemisphere:{' '}
                <Text style={styles.labelValue}>{north_months}</Text>
              </Text>
            ) : null}
            {south_months ? (
              <Text style={styles.label}>
                Southern Hemisphere:{' '}
                <Text style={styles.labelValue}>{south_months}</Text>
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.closeButtonView}>
        <TouchableOpacity
          accessibilityRole='button'
          accessibilityHint='Tap to close the modal'
          onPress={() => closeModal()}
        >
          <MaterialCommunityIcons
            name='close-circle'
            style={styles.closeButton}
            size={45}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CAF7DC',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  backgroundImage: {
    backgroundColor: '#ff69b0',
    height: hp('20%'),
    margin: 20,
    borderRadius: 20,
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
    flex: 1,
    alignSelf: 'stretch',
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 20
  },
  label: {
    fontFamily: 'FinkHeavy',
    fontSize: wp('5.5%'),
    textAlign: 'center',
    paddingBottom: 4
  },
  labelValue: {
    fontFamily: 'SecondaRegular',
    fontSize: wp('4.5%'),
    textAlign: 'center',
    paddingBottom: 4
  },
  labelContainer: {
    marginVertical: 20
  },
  closeButtonView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 4
  },
  closeButton: {
    color: '#fff'
  }
});

export default CatchCard;
