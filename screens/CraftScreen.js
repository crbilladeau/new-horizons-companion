import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { recipes } from '../constants/recipes';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import orderBy from 'lodash/orderBy';

const CraftScreen = () => {
  const alphabeticalRecipes = orderBy(
    recipes,
    [item => item.name.toLowerCase()],
    ['asc']
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={alphabeticalRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity>
                <Text style={styles.craft}>
                  {/* <Image
                    source={require('../assets/images/icons/craft.png')}
                    style={styles.icon}
                  /> */}
                  {item.name} - {item.materials}
                </Text>
                <Text style={styles.materials}>
                  {item.source} - {item.price} bells
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // flex: 1,
    marginHorizontal: 20
  },
  container: {
    // flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingBottom: 6,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  icon: {
    height: 32,
    width: 32
  },
  craft: {
    fontFamily: 'FinkHeavy',
    fontSize: hp('3%'),
    marginVertical: 10,
    paddingLeft: 20
  },
  materials: {
    fontFamily: 'FinkHeavy',
    fontSize: hp('2.6%'),
    marginVertical: 10,
    paddingLeft: 20
  }
});

export default CraftScreen;
