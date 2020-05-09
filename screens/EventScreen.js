import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { events } from '../constants/events';

register = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    alert('You need to enable notifications in your settings');
    return;
  }
  const token = await Notifications.getExpoPushTokenAsync();
};

// scheduleNotification = async item => {
//   let currentTime = new Date();
//   let eventTime = new Date(`${item.event_time}`);
//   if (eventTime < currentTime) {
//     eventTime = eventTime.setFullYear(eventTime.getFullYear() + 1);
//     eventTime = new Date(eventTime);
//     console.log(eventTime);
//   }

//   let notificationId = await Notifications.scheduleLocalNotificationAsync(
//     {
//       title: `Special Event: ${item.name}`,
//       body: `Today is ${item.name} in Animal Crossing: New Horizons! Log into New Horizons to participate!`,
//       sound: true
//     },
//     {
//       time: eventTime
//     }
//   );
//   openNotifyModal();
//   return notificationId;
// };

class EventScreen extends React.Component {
  state = {
    notifyModal: false,
    removeModal: false,
    notificationId: {}
  };
  componentDidMount() {
    register();
    this.listener = Notifications.addListener(this.handleNotifications);
  }
  componentWillUnmount() {
    this.listener.remove(this.notificationId);
  }

  handleNotifications = notificationId => {
    this.setState({ notificationId });
  };

  scheduleNotification = async item => {
    let currentTime = new Date();
    let eventTime = new Date(`${item.event_time}`);
    if (eventTime < currentTime) {
      eventTime = eventTime.setFullYear(eventTime.getFullYear() + 1);
      eventTime = new Date(eventTime);
      console.log(eventTime);
    }

    let notificationId = await Notifications.scheduleLocalNotificationAsync(
      {
        title: `Special Event: ${item.name}`,
        body: `Today is ${item.name} in Animal Crossing: New Horizons! Log into New Horizons to participate!`,
        sound: true
      },
      {
        time: eventTime
      }
    );
    openNotifyModal();
    return notificationId;
  };
  render() {
    removeScheduledNotifications = async () => {
      openRemoveModal();
      Notifications.cancelAllScheduledNotificationsAsync();
    };

    openNotifyModal = () => {
      this.setState({ notifyModal: true });
    };

    closeNotifyModal = () => {
      this.setState({ notifyModal: false });
    };

    openRemoveModal = () => {
      this.setState({ removeModal: true });
    };

    closeRemoveModal = () => {
      this.setState({ removeModal: false });
    };

    openErrorModal = () => {
      this.setState({ errorModal: true });
    };

    closeErrorModal = () => {
      this.setState({ errorModal: false });
    };

    return (
      <View style={styles.listContainer}>
        <View style={styles.headerView}>
          <Text style={styles.header}>AC: New Horizons Scheduled Events</Text>
        </View>

        <TouchableOpacity
          accessibilityRole='button'
          accessibilityHint='Tap to remove all scheduled notifications'
          style={styles.buttonRemove}
          onPress={() => removeScheduledNotifications()}
        >
          <Text style={styles.button}>Remove all Event Notifications</Text>
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity>
                  <View style={styles.eventContainer}>
                    <Text style={styles.event}>
                      <Image source={item.icon} style={styles.icon} />
                      {item.name} - {item.time}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    accessibilityRole='button'
                    accessibilityHint='Tap to set a notification for this event'
                    style={styles.buttonBackground}
                    onPress={() => this.scheduleNotification(item)}
                  >
                    <Text style={styles.button}>Notify</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />

        <View style={styles.modalContainer}>
          <Modal
            isVisible={this.state.notifyModal}
            onBackdropPress={closeNotifyModal}
            onSwipeComplete={closeNotifyModal}
            swipeDirection='up'
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            animationIn='bounceIn'
            animationInTiming={300}
            // animationOutTiming={300}
            supportedOrientations={['portrait', 'landscape']}
            style={styles.modalContainer}
          >
            <EventNotify />
          </Modal>
        </View>

        <View style={styles.modalContainer}>
          <Modal
            isVisible={this.state.removeModal}
            onBackdropPress={closeRemoveModal}
            onSwipeComplete={closeRemoveModal}
            swipeDirection='up'
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            animationIn='bounceIn'
            animationInTiming={300}
            // animationOutTiming={300}
            supportedOrientations={['portrait', 'landscape']}
            style={styles.modalContainer}
          >
            <EventRemove />
          </Modal>
        </View>
      </View>
    );
  }
}

const EventNotify = () => {
  return (
    <View style={styles.card}>
      <View style={styles.rightContent}>
        <Text style={styles.label}>Event Notification Scheduled!</Text>
      </View>
      <TouchableOpacity onPress={() => closeNotifyModal()}>
        <View style={styles.closeButtonView}>
          <Text style={styles.closeButton}>OK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const EventRemove = () => {
  return (
    <View style={styles.card}>
      <View style={styles.rightContent}>
        <Text style={styles.label}>All Event Notifications Removed</Text>
      </View>
      <TouchableOpacity onPress={() => closeRemoveModal()}>
        <View style={styles.closeButtonView}>
          <Text style={styles.closeButton}>OK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// const EventError = () => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.rightContent}>
//         <Text style={styles.label}>
//           This event has passed. Please wait until next month to schedule
//           notifications for 2021!
//         </Text>
//       </View>
//       <TouchableOpacity onPress={() => closeErrorModal()}>
//         <View style={styles.closeButtonView}>
//           <Text style={styles.closeButton}>OK</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginHorizontal: 20
    // flexWrap: 'wrap'
  },
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingBottom: 6,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerView: {
    backgroundColor: '#807056',
    borderRadius: 40,
    marginVertical: 10,
    width: wp('65%'),
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  header: {
    fontFamily: 'FinkHeavy',
    color: '#fecc55',
    fontSize: hp('4.5%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  icon: {
    height: 32,
    width: 32
  },
  eventContainer: {
    marginVertical: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  event: {
    fontFamily: 'FinkHeavy',
    fontSize: hp('3%'),
    paddingLeft: 20
  },
  buttonRemove: {
    backgroundColor: '#f72351',
    marginVertical: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  buttonView: {
    alignSelf: 'flex-end'
  },
  buttonBackground: {
    backgroundColor: '#F372BB',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 5,
    width: 100,
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
  button: {
    fontFamily: 'Humming',
    color: '#fff',
    fontSize: wp('2.5%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  card: {
    backgroundColor: '#19B5FE',
    borderRadius: 15,
    height: hp('40%'),
    width: wp('70%'),
    flexDirection: 'column',
    justifyContent: 'center'
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

export default EventScreen;
