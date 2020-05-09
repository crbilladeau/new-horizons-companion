import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import Constants from 'expo-constants';

const paleGreen = '#8be3b1';

const DATA = [
  {
    id: '1',
    title: 'Villagers',
    image: require('../assets/images/icons/villager.png')
  },
  {
    id: '2',
    title: 'Catch',
    image: require('../assets/images/icons/catch.png')
  },
  // {
  //   id: '3',
  //   title: 'Clothes',
  //   image: require('../assets/images/icons/item.png')
  // },
  {
    id: '4',
    title: 'Craft',
    image: require('../assets/images/icons/hammer.png')
  },
  {
    id: '5',
    title: 'Events',
    image: require('../assets/images/icons/events.png')
  }
  // {
  //   id: '6',
  //   title: 'Museum',
  //   image: require('../assets/images/icons/museum.png')
  // }
];

export const GuideIconCard = ({ title, image }) => {
  return (
    <View style={styles.icon}>
      <Image source={image} style={{ height: 60, width: 60 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const GuideScreen = ({ navigation }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              accessibilityRole='imagebutton'
              accessibilityHint='Tap to navigate screens'
              onPress={() => navigation.navigate(`${item.title}`)}
            >
              <GuideIconCard title={item.title} image={item.image} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'repeat',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  //   opacity: 0.3
  // },
  icon: {
    backgroundColor: `${paleGreen}`,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('20%'),
    width: wp('40%'),
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  },
  title: {
    fontSize: wp('6%'),
    fontFamily: 'FinkHeavy',
    textAlign: 'center',
    color: '#fff',
    marginTop: 15,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 1,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});

export default withNavigation(GuideScreen);
