import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import SearchError from '../components/SearchError';

export const ErrorModal = ({ closeError, error }) => {
  return (
    <>
      <Modal
        isVisible={error}
        onBackdropPress={closeError}
        onSwipeComplete={closeError}
        swipeDirection='up'
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        animationIn='bounceIn'
        animationInTiming={300}
        // animationOutTiming={300}
        supportedOrientations={['portrait', 'landscape']}
      >
        <SearchError closeError={closeError} />
      </Modal>
    </>
  );
};
