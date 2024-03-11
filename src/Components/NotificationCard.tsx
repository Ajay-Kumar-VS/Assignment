import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const NotificationCard = ({item}: any) => {
  const {img, readStatus, details, time} = item;
  
 
  return (
    <View
      style={[styles.constainer, !readStatus && {backgroundColor: '#F1FCFA'}]}>
      <View style={styles.subContainer}>
        <Image source={img} style={styles.icon} />
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>
      <View style={styles.subDetailsContainer}>
        <Text style={styles.subDetails}>{time} ago</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    // width:337,
    // height:104,
    // backgroundColor:'red',
    // marginHorizontal:20,
    // marginTop:284,

    paddingVertical: 17,
    paddingHorizontal: 20,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E2E8EB',
    gap: 4,

    alignContent: 'space-around',
  },
  subContainer: {
   
    gap: 27,
    flexDirection: 'row',

    alignItems: 'center',
    alignContent: 'space-around',
  },
  icon: {
    width: 48,
    height: 48,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  detailsContainer: {
    
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',

  },
  details: {

    paddingHorizontal:5,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: '#000000',
    textAlign: 'justify',
    alignItems: 'center',
  },
  subDetailsContainer: {

    paddingHorizontal: 86,
    gap: 8,
  },
  subDetails: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    // letterSpacing: 0.02,
    marginLeft:12,
    color: '#4E5E6C',
  },
});

export default NotificationCard;
