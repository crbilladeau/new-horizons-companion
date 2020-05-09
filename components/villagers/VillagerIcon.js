import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import VillagerCard from './VillagerCard';

const VillagerIcon = ({
  name,
  species,
  gender,
  personality,
  villagerStyle,
  image,
  birthday,
  starSign,
  skill,
  phrase,
  clothes,
  saying,
  goal,
  color,
  song,
  coffee,
  milk,
  sugar,
  openModal,
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
      <TouchableOpacity onPress={() => openModal()}>
        <View style={styles.villagerIcon}>
          <Image
            accessibilityRole='image'
            style={{ width: '100%', height: '100%', margin: 10 }}
            resizeMode={'contain'}
            source={image}
          />
          <View style={styles.backgroundLabel}>
            <Text style={styles.label}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.modalContainer}>
        <Modal
          propogateSwipe
          isVisible={modal}
          onBackdropPress={closeModal}
          onSwipeComplete={closeModal}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          animationIn='bounceIn'
          animationInTiming={400}
          // animationOutTiming={300}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modalContainer}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  villagerIcon: {
    backgroundColor: '#31e69e',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('18%'),
    width: wp('28%'),
    padding: 30,
    marginBottom: 10,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  backgroundLabel: {
    backgroundColor: '#19B5FE',
    borderRadius: 30,
    marginTop: 6,
    padding: 8,
    width: wp('28%')
  },
  label: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'FinkHeavy',
    fontSize: wp('4.5%'),
    // paddingTop: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  }
});

export default VillagerIcon;
