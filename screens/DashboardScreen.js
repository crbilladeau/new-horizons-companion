import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimeDate from '../components/TimeDate';
import CurrentBirthday from '../components/CurrentBirthday';
import CurrentEvent from '../components/CurrentEvent';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TimeDate />
        <View style={styles.dashboardContent}>
          <CurrentBirthday />
          <CurrentEvent />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  dashboardContent: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    overflow: 'hidden'
  }
});

export default DashboardScreen;
