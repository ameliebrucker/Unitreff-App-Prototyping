import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {profilePicSizes, generalStyles, textStyles, colors} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
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
        <Text style={styles.headlineText}>Profilansicht</Text>
      </View>
      <View style={styles.maincontent}>
        <Image 
          source={require('../assets/profilepictures/profilepic-user.png')} 
          style={styles.profilePic}  
        />
        <LinearGradient
          colors={colors.gradientBright}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.buttonsProfileView}>
            <Pressable style={generalStyles.primaryBtnLargeInside}>
              <Text style={textStyles.primaryBtnText}>Profilbild ändern</Text>
            </Pressable>
        </LinearGradient>
        <LinearGradient
          colors={colors.gradientBright}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.buttonsProfileView}>
            <Pressable style={generalStyles.secondaryBtnLargeInside} onPress={()=>navigation.navigate('LoginScreen')}>
              <Text style={textStyles.secondaryBtnText}>Logout</Text>
            </Pressable>
        </LinearGradient>
      </View>
      
      <View style={generalStyles.navBarContainer}>
            <View style={generalStyles.navBar}>
                <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image 
                    source={require('../assets/icons/uil_home-alt.png')} 
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
                <Image 
                  source={require('../assets/icons/iconoir_profile-circled-purple.png')} 
                  style={generalStyles.iconNavbar}     
                />
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
    paddingTop: 40
  },
  profilePic: {
    width: profilePicSizes.large,
    height: profilePicSizes.large,
    borderRadius: 100
  },
  buttonsProfileView: {
    ...generalStyles.btnLarge,
    marginTop: 25
  }
});

export default ProfileScreen;