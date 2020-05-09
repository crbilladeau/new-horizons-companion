import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import CatchCard from './CatchCard';

const CatchIcon = ({
  name,
  price,
  location,
  size,
  image,
  time,
  type,
  months,
  north_months,
  south_months,
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
      <TouchableOpacity
        style={{ paddingBottom: 10 }}
        accessibilityRole='imagebutton'
        onPress={() => openModal()}
      >
        <View style={styles.catchIcon}>
          <Image
            resizeMode={'contain'}
            style={{ height: '100%', width: '100%' }}
            source={image}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        accessibilityHint='Tap outside this area or tap the X button to dismiss modal'
        style={styles.modalContainer}
      >
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
          style={styles.modalContainer}
        >
          <View accessibilityViewIsModal={true}>
            <CatchCard
              name={name}
              price={price}
              location={location}
              size={size}
              image={image}
              time={time}
              months={months}
              north_months={north_months}
              south_months={south_months}
              type={type}
              closeModal={closeModal}
            />
          </View>
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
  catchIcon: {
    backgroundColor: '#8be3b1',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('16%'),
    width: wp('28%'),
    paddingVertical: 35,
    paddingBottom: 18,
    marginBottom: 15
  },
  label: {
    alignSelf: 'center',
    fontFamily: 'FinkHeavy',
    fontSize: wp('3.8%'),
    flexWrap: 'wrap',
    color: '#fff',
    padding: 4,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: -0.5, height: 0.5 }
  },
  labelContainer: {
    backgroundColor: '#19B5FE',
    borderRadius: 30,
    padding: 2,
    width: wp('28%'),
    marginTop: 10
  }
});

export default CatchIcon;
