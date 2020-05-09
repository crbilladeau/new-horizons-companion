import React from 'react';
import { Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Font from 'expo-font';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import GuideScreen from './screens/GuideScreen';
import VillagersScreen from './screens/VillagersScreen';
import CatchScreen from './screens/CatchScreen';
import FishScreen from './screens/FishScreen';
import BugScreen from './screens/BugScreen';
import SeaScreen from './screens/SeaScreen';
import BuriedScreen from './screens/BuriedScreen';
import EventScreen from './screens/EventScreen';
import CraftScreen from './screens/CraftScreen';
// import ClothesScreen from './screens/ClothesScreen';
// import TopsScreen from './screens/TopsScreen';
// import BottomsScreen from './screens/BottomsScreen';
// import DressesScreen from './screens/DressesScreen';
// import HeadwearScreen from './screens/HeadwearScreen';
// import AccessoriesScreen from './screens/AccessoriesScreen';
// import SocksShoesScreen from './screens/SocksShoesScreen';
// // import MuseumScreen from './screens/MuseumScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const navigator = createBottomTabNavigator(
  {
    Dashboard: createStackNavigator(
      {
        Dashboard: {
          screen: DashboardScreen,
          navigationOptions: {
            headerShown: true
          }
        }
      },
      {
        defaultNavigationOptions: {
          title: 'New Horizons Companion',
          headerStyle: { backgroundColor: '#ff69b0' },
          headerStatusBarHeight: 30,
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'FinkHeavy',
            fontSize: 25
          }
        }
      }
    ),
    Guide: createStackNavigator(
      {
        Guide: {
          screen: GuideScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Villagers: {
          screen: VillagersScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },

        Catch: {
          screen: CatchScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Craft: {
          screen: CraftScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Fish: {
          screen: FishScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Bugs: {
          screen: BugScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Sea: {
          screen: SeaScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        'Buried Creatures': {
          screen: BuriedScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        },
        Events: {
          screen: EventScreen,
          navigationOptions: {
            headerTintColor: '#fff',
            headerStatusBarHeight: 30,
            headerStyle: { backgroundColor: '#ff69b0' },
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'FinkHeavy',
              fontSize: 25
            }
          }
        }
        // Museum: {
        //   screen: MuseumScreen,
        //   navigationOptions: {
        //     headerTintColor: '#fff',
        //     headerStatusBarHeight: 30,
        //     headerStyle: { backgroundColor: '#ff69b0' },
        //     headerTitleStyle: {
        //       color: '#fff',
        //       fontFamily: 'FinkHeavy',
        //       fontSize: 25
        //     }
        //   }
        // }
      }
      // navigationConfig
    ),
    About: {
      screen: SettingsScreen
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if (navigation.state.routeName === 'Dashboard') {
          return (
            <MaterialCommunityIcons
              name='calendar-clock'
              size={27}
              color={tintColor}
            />
          );
        } else if (navigation.state.routeName === 'Guide') {
          return (
            <MaterialCommunityIcons name='book' size={27} color={tintColor} />
          );
        } else if (navigation.state.routeName === 'About') {
          return (
            <MaterialCommunityIcons
              name='information-outline'
              size={27}
              color={tintColor}
            />
          );
        }
      },
      tabBarOptions: {
        allowFontScaling: false,
        activeTintColor: '#31e69e',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#ff69b0',
          paddingTop: 5
        }
      }
    })
  }
);

tabBarComponent: ({ navigation }) => (
  <BottomBar
    navigation={navigation}
    currentRouteName={navigation.state.routeName}
  />
);

const Stack = createAppContainer(navigator);

export default function App(props) {
  Text.defaultProps = Text.defaultProps || {};
  // Ignore dynamic type scaling on iOS
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  // Ignore dynamic type scaling on iOS
  TextInput.defaultProps.allowFontScaling = false;

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          SecondaLight: require('./assets/fonts/Seconda-Light.ttf'),
          SecondaRegular: require('./assets/fonts/Seconda-Regular.ttf'),
          SecondaMedium: require('./assets/fonts/Seconda-Medium.ttf'),
          Humming: require('./assets/fonts/Humming.otf'),
          FinkHeavy: require('./assets/fonts/FinkHeavy.ttf'),
          Calvert: require('./assets/fonts/CalvertMT.ttf'),
          CalvertLight: require('./assets/fonts/CalvertMTLight.ttf'),
          CalvertBold: require('./assets/fonts/CalvertMTBold.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    );
  }
}
