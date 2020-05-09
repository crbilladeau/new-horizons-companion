import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const paleBlue = '#6ed1ff';

const CatchIconCard = ({ title, image }) => {
  return (
    <View style={styles.icon}>
      <Image source={image} style={{ height: 55, width: 55 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const catches = [
  {
    id: '1',
    title: 'Fish',
    image: require('../assets/images/icons/fish.png')
  },
  {
    id: '2',
    title: 'Bugs',
    image: require('../assets/images/icons/ladybug.png')
  },
  {
    id: '3',
    title: 'Sea',
    image: require('../assets/images/icons/sea.png')
  },
  {
    id: '4',
    title: 'Buried Creatures',
    image: require('../assets/images/icons/fossil.png')
  }
];

const CatchScreen = ({ navigation }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        data={catches}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              accessibilityRole='imagebutton'
              accessibilityHint='Tap to navigate screens'
              onPress={() => navigation.navigate(`${item.title}`)}
            >
              <CatchIconCard
                title={item.title}
                image={item.image}
                style={styles.icon}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: `${paleBlue}`,
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

export default withNavigation(CatchScreen);
