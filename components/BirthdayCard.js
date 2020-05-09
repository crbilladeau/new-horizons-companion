import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import VillagerCard from './villagers/VillagerCard';

const BirthdayCard = ({
  name,
  species,
  gender,
  personality,
  birthday,
  starSign,
  skill,
  villagerStyle,
  phrase,
  clothes,
  saying,
  goal,
  color,
  song,
  coffee,
  milk,
  sugar,
  image,
  error,
  closeModal
}) => {
  const [modal, setModal] = useState(false);

  openModal = () => {
    setModal(true);
  };

  closeModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          accessibilityRole='imagebutton'
          accessibilityHint='Tap to open Villager modal'
          onPress={() => openModal()}
        >
          <View style={styles.content}>
            <Text style={styles.header}>Today's Birthday</Text>
            {name ? (
              <>
                <View style={styles.backgroundImage}>
                  <Image
                    accessibilityRole='image'
                    source={image}
                    style={styles.image}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>{name}</Text>
                </View>
              </>
            ) : (
              <View style={styles.errorView}>
                <Image
                  source={require('../assets/images/icons/cake.png')}
                  style={styles.errorImage}
                  resizeMode={'contain'}
                />
                <Text style={styles.error}>{error}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {name ? (
        <View style={styles.modalContainer}>
          <Modal
            isVisible={modal}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            swipeDirection='up'
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            animationIn='bounceIn'
            animationInTiming={400}
            // animationOutTiming={300}
            supportedOrientations={['portrait', 'landscape']}
            // style={styles.modalContainer}
          >
            <VillagerCard
              name={name}
              species={species}
              villagerStyle={villagerStyle}
              image={image}
              personality={personality}
              gender={gender}
              birthday={birthday}
              starSign={starSign}
              skill={skill}
              phrase={phrase}
              color={color}
              goal={goal}
              saying={saying}
              song={song}
              clothes={clothes}
              coffee={coffee}
              milk={milk}
              sugar={sugar}
              closeModal={closeModal}
            />
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
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
    justifyContent: 'space-evenly',
    padding: 15,
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
  backgroundImage: {
    backgroundColor: '#31e69e',
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: wp('25%'),
    height: hp('25%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: wp('20%'),
    height: hp('20%'),
    marginVertical: 10
  },
  labelContainer: {
    flexDirection: 'column',
    backgroundColor: '#ff69b0',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 18,
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
  errorView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    fontFamily: 'Humming',
    fontSize: wp('3.5%'),
    textAlign: 'center',
    lineHeight: 12,
    paddingTop: 30,
    color: '#fff'
  },
  errorImage: {
    width: wp('20%'),
    height: hp('15%')
  },
  header: {
    fontSize: wp('8%'),
    fontFamily: 'FinkHeavy',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});

export default BirthdayCard;
