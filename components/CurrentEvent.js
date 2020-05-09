import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import moment from 'moment';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { events } from '../constants/events';
import Modal from 'react-native-modal';
import EventCard from './EventCard';

const CurrentEvent = () => {
  const [eventModal, setEventModal] = useState(false);

  openEventModal = () => {
    setEventModal(true);
  };

  closeEventModal = () => {
    setEventModal(false);
  };

  // const currentDate = 'April 1st';
  const currentDate = moment().format('MMMM Do');

  let matchedEvent = events.filter(item => item.time == `${currentDate}`);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          accessibilityRole='imagebutton'
          accessibilityHint='Tap to open event modal'
          onPress={() => openEventModal()}
        >
          <View style={styles.content}>
            <Text style={styles.header}>Today's Event</Text>
            {matchedEvent[0] ? (
              <>
                <Image
                  source={matchedEvent[0].icon}
                  style={styles.image}
                  resizeMode={'contain'}
                  accessibilityLabel='event icon'
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>{matchedEvent[0].name}</Text>
                </View>
              </>
            ) : (
              <View style={styles.errorView}>
                <Image
                  source={require('../assets/images/icons/calendar.png')}
                  style={styles.errorImage}
                  resizeMode={'contain'}
                />
                <Text style={styles.error}>Sorry, no events today!</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {matchedEvent[0] ? (
        <Modal
          isVisible={eventModal}
          onBackdropPress={closeEventModal}
          onSwipeComplete={closeEventModal}
          swipeDirection='up'
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          animationIn='bounceIn'
          animationInTiming={400}
          // animationOutTiming={300}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modalContainer}
        >
          <EventCard
            name={matchedEvent[0].name}
            icon={matchedEvent[0].icon}
            description={matchedEvent[0].description}
            time={matchedEvent[0].time}
            closeEventModal={closeEventModal}
          />
        </Modal>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card: {
    borderRadius: 15,
    alignItems: 'center',
    width: wp('80%'),
    marginBottom: 15
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15,
    backgroundColor: '#19B5FE',
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
    width: wp('25%'),
    height: hp('25%'),
    marginBottom: 10
  },
  labelContainer: {
    flexDirection: 'column',
    backgroundColor: '#ff69b0',
    borderRadius: 20,
    marginBottom: 10,
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
    paddingTop: 10,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  header: {
    fontSize: wp('8%'),
    fontFamily: 'FinkHeavy',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  errorView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    fontFamily: 'Humming',
    fontSize: wp('3.5%'),
    lineHeight: 12,
    textAlign: 'center',
    paddingTop: 30,
    color: '#fff'
  },
  errorImage: {
    width: wp('20%'),
    height: hp('15%')
  }
});

export default CurrentEvent;
