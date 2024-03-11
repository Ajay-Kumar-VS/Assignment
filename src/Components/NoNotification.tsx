import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
const noNotification = require('../Assets/Icons/noNotification.png');

const NoNotification = () => {
  return (
    <View style={styles.container}>
      <Image source={noNotification} style={styles.icon} />
      <View style={styles.subContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.details}>No Notifications Yet!</Text>
        </View>

        <Text style={styles.subDetails}>
          You have no notifications right now.Come back later.
        </Text>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    marginTop: 184,
    marginHorizontal: 20,
 
    justifyContent: 'center',




    alignContent: 'space-around',
    alignItems: 'center',
   
  },
  subContainer: {

   

    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    height: 154,
    width: 154,
  },
  detailContainer: {
    
    marginHorizontal:4,
    gap: 8,


  },
  details: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32.4,
    color: '#454545',
    textAlign: 'center',
  },
  subDetails: {


    // paddingHorizontal:20,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#292F36',
    textAlign: 'center',

  },
});
export default NoNotification;
