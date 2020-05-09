import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default class TimeDate extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const currentDate = moment().format('MMMM Do, YYYY');
    const currentTime = moment().format('h:mm:ss A');
    return (
      <View style={styles.container}>
        <Feather
          accessibilityLabel='clock icon'
          name='clock'
          style={styles.icon}
        />
        <View style={styles.timeView}>
          <Text style={styles.time}>{currentDate}</Text>
          <Text style={styles.time}>{currentTime}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19B5FE',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp('80%'),
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  icon: {
    fontSize: wp('7%'),
    color: '#fff',
    marginHorizontal: 10,
    alignSelf: 'center'
  },
  timeView: {
    // flex: 1,
    flexWrap: 'wrap'
  },
  time: {
    fontSize: wp('6%'),
    fontFamily: 'FinkHeavy',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,

    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});
