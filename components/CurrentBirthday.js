import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Button } from 'react-native';
import moment from 'moment';
import BirthdayCard from './BirthdayCard';
import { villagers } from '../database/db';

const CurrentBirthday = () => {
  const currentDate = moment().format('MMMM Do');

  let matchedVillager = villagers.filter(
    item => item.birthday == `${currentDate}`
  );

  return (
    <>
      {matchedVillager[0] ? (
        <BirthdayCard
          accessibilityRole='imagebutton'
          name={matchedVillager[0].name}
          birthday={matchedVillager[0].birthday}
          image={matchedVillager[0].image}
          personality={matchedVillager[0].personality}
          gender={matchedVillager[0].gender}
          villagerStyle={matchedVillager[0].villagerStyle}
          species={matchedVillager[0].species}
          starSign={matchedVillager[0].star_sign}
          skill={matchedVillager[0].skill}
          goal={matchedVillager[0].goal}
          color={matchedVillager[0].fave_color}
          song={matchedVillager[0].fave_song}
          clothes={matchedVillager[0].fave_clothing}
          coffee={matchedVillager[0].type}
          milk={matchedVillager[0].milk}
          sugar={matchedVillager[0].sugar}
        />
      ) : (
        <BirthdayCard error='Sorry, no birthdays today!' />
      )}
    </>
  );
};

export default CurrentBirthday;
