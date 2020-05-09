import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  FlatList,
  ScrollView
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const iconButtons = [
  {
    id: '1',
    author: 'Freepik',
    url: 'https://www.flaticon.com/authors/freepik'
  },
  {
    id: '2',
    author: 'Creaticca Creative Agency',
    url: 'https://www.flaticon.com/authors/creaticca-creative-agency'
  },
  {
    id: '3',
    author: 'dDara',
    url: 'https://www.flaticon.com/authors/ddara'
  },
  {
    id: '4',
    author: 'Good Ware',
    url: 'https://www.flaticon.com/authors/good-ware'
  },
  {
    id: '5',
    author: 'iconixar',
    url: 'https://www.flaticon.com/authors/iconixar'
  },

  {
    id: '6',
    author: 'Made',
    url: 'https://www.flaticon.com/authors/made-by-made'
  },
  {
    id: '7',
    author: 'Pixelmeetup',
    url: 'https://www.flaticon.com/authors/pixelmeetup'
  },
  {
    id: '8',
    author: 'Smashicons',
    url: 'https://www.flaticon.com/authors/smashicons'
  },
  {
    id: '9',
    author: 'srip',
    url: 'https://www.flaticon.com/authors/srip'
  },
  {
    id: '10',
    author: 'Vitaly Gorbachev',
    url: 'https://www.flaticon.com/authors/vitaly-gorbachev'
  }
];

const SettingsScreen = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#19B5FE' }}>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.aboutView}>
              <View style={styles.headerView}>
                <Text style={styles.header}>About the Developer</Text>
              </View>

              <Text style={styles.about}>
                Hi there! Thank you for downloading this app. If you would like
                to follow along for more updates or learn more about the
                developer, use the link below.
              </Text>
              <View style={styles.aboutButtonView}>
                <TouchableOpacity
                  accessibilityRole='button'
                  accessibilityHint="Tap to open an external link to the app developer's website in a web browser"
                  style={styles.aboutButton}
                  onPress={() =>
                    Linking.openURL(
                      'https://newhorizonscompanion.wordpress.com/'
                    )
                  }
                >
                  <Text style={styles.buttonLabel}>Learn More</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.subHeader}>
                Questions? Corrections? Need more support?
              </Text>
              <View style={styles.supportButtons}>
                <TouchableOpacity
                  accessibilityRole='button'
                  accessibilityHint='Tap to open an external link to the support page for this app in a web browser'
                  style={styles.aboutButton}
                  onPress={() =>
                    Linking.openURL(
                      'https://newhorizonscompanion.wordpress.com/support/'
                    )
                  }
                >
                  <Text style={styles.buttonLabel}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  accessibilityRole='button'
                  accessibilityHint='Tap to open an external link to the privacy policy page for this app in a web browser'
                  style={styles.aboutButton}
                  onPress={() =>
                    Linking.openURL(
                      'https://newhorizonscompanion.wordpress.com/privacy-policy/'
                    )
                  }
                >
                  <Text style={styles.buttonLabel}>Get support</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconList}>
                <Text style={styles.subHeader}>Icons made by</Text>
                <Text style={styles.smallInfo}>
                  (swipe left horizontally to scroll through the list)
                </Text>

                <>
                  <FlatList
                    // columnWrapperStyle={{ alignSelf: 'center' }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={iconButtons}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ flexWrap: 'wrap' }}>
                          <TouchableOpacity
                            accessibilityRole='button'
                            accessibilityHint="Tap to open an external link to the icon author's website in a web browser"
                            style={styles.iconButtons}
                            onPress={() => Linking.openURL(`${item.url}`)}
                          >
                            <Text style={styles.buttonLabel}>
                              {item.author}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                  <Text
                    accessibilityRole='link'
                    accessibilityHint='Tap to open an external link to the icon source website in a web browser'
                    onPress={() => Linking.openURL('https://www.flaticon.com')}
                    style={styles.subTitle}
                  >
                    from www.flaticon.com
                  </Text>
                </>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: '#19B5FE',
    flexGrow: 1,
    height: '100%'
  },
  aboutView: {
    marginHorizontal: 30
  },
  headerView: {
    backgroundColor: '#807056',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center'
  },
  header: {
    fontFamily: 'FinkHeavy',
    color: '#fecc55',
    fontSize: hp('5%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  subHeader: {
    fontFamily: 'FinkHeavy',
    color: '#fecc55',
    fontSize: hp('4.7%'),
    textAlign: 'center',
    lineHeight: hp('6%'),
    marginTop: 50,
    marginVertical: 15,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  about: {
    marginVertical: 20,
    fontFamily: 'Calvert',
    color: '#fff',
    lineHeight: hp('4%'),
    fontSize: hp('3%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  aboutButtonView: {
    width: wp('50%'),
    alignSelf: 'center'
  },
  aboutButton: {
    backgroundColor: '#31e69e',
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginVertical: 5,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },

  iconButtons: {
    backgroundColor: '#31e69e',
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    marginVertical: 5,
    marginRight: 15,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  buttonLabel: {
    fontFamily: 'Humming',
    color: '#fff',
    textAlign: 'center',
    fontSize: hp('2%'),
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  subTitle: {
    marginVertical: 20,
    fontFamily: 'Calvert',
    color: '#fff',
    lineHeight: hp('6%'),
    fontSize: hp('3%'),
    textAlign: 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  smallInfo: {
    marginVertical: 10,
    fontFamily: 'Calvert',
    color: '#fff',
    lineHeight: hp('4%'),
    fontSize: hp('2%'),
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  supportButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default SettingsScreen;
