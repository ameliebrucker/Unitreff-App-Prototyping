import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {profilePicSizes, generalStyles, textStyles, colors, windowWidth} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const ParticipantsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={generalStyles.background}>
      <View style={generalStyles.statusbar}></View>
      <View style={generalStyles.header}>
          <Pressable style={generalStyles.backButton} onPress={()=>{navigation.goBack();}}>
              <Image 
                source={require('../assets/icons/material-symbols_arrow-back-ios-rounded.png')} 
                style={generalStyles.icon} 
              />
          </Pressable>
        <Text style={styles.headlineText}>Teilnehmende</Text>
      </View>
      <View style={styles.maincontent}>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-user.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Amelie Brucker</Text>
            </View>
        </View>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-participant-1.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Hadir Elsekilly</Text>
            </View>
        </View>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-participant-2.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Alina Rimal</Text>
            </View>
        </View>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-participant-3.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Pascal Smith</Text>
            </View>
        </View>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-participant-4.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Junior Müller</Text>
            </View>
        </View>
        <View style={styles.participantContainer}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/profilepictures/profilepic-participant-5.png')} 
                style={styles.profilePicParicipant}
              />
              <Text style={generalStyles.informationText}>Gregos Blumenberg</Text>
            </View>
        </View>
       </View>
        
      
       <View style={generalStyles.navBarContainer}>
            <View style={generalStyles.navBar}>
                <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image 
                    source={require('../assets/icons/uil_home-alt-purple.png')} 
                    style={generalStyles.iconNavbar}  
                    />
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('CalendarScreen')}>
                    <Image 
                    source={require('../assets/icons/calendar.png')} 
                    style={{...generalStyles.iconNavbar, marginRight: 65}}    
                    />
                </Pressable>          
                    <Image 
                    source={require('../assets/icons/ion_notifications-outline.png')} 
                    style={generalStyles.iconNavbar}  
                />
                <Pressable onPress={()=>navigation.navigate('ProfileScreen')}>
                    <Image 
                        source={require('../assets/icons/iconoir_profile-circled.png')} 
                        style={generalStyles.iconNavbar}     
                    />
                </Pressable>
            </View>
            <Pressable style={generalStyles.plusButtonNavBar} onPress={()=>navigation.navigate('CreateEventScreen')}>
                <Image 
                source={require('../assets/icons/ic_baseline-plus.png')}     
                />
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineText: {
    ...textStyles.pageTitleText,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    zIndex: 0,
    elevation: 0
  },
  maincontent: {
    ...generalStyles.maincontent,
    marginTop: 15
  },
  profilePicParicipant: {
    width: profilePicSizes.small,
    height: profilePicSizes.small,
    borderRadius: 100
  },
  participantContainer: {
    backgroundColor: colors.darkGrey,
    borderRadius: 15,
    width: windowWidth - 40,
    marginTop: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    heigth: 45
  }
});

export default ParticipantsScreen;
