import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import {generalStyles, textStyles, colors} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const DetailScreenMarioKart = () => {
  const navigation = useNavigation();
  const [isZusageToggleOn, setIsZusageToggleOn] = useState(true);

  function ButtonZusage(props) {
    const isToggleOn = props.isZusageToggleOn;
    if (isToggleOn) {
        return <LinearGradient
        colors={colors.gradientBright}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.zusageButton}>
          <View style={generalStyles.primaryBtnLargeInside}>
            <Text style={textStyles.primaryBtnText}>Zusagen</Text>
          </View>
        </LinearGradient>;
    }
    return <LinearGradient
    colors={colors.gradientBright}
    start={[0, 1]}
    end={[1, 0]}
    style={styles.zusageButton}>
      <View style={generalStyles.secondaryBtnLargeInside}>
        <Text style={textStyles.secondaryBtnText}>Absagen</Text>
      </View>
    </LinearGradient>;
  }

  return (
    <View style={generalStyles.background}>
      <View style={generalStyles.statusbar}></View>
      <View style={generalStyles.header}>
        <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
          <Image 
          source={require('../assets/icons/material-symbols_arrow-back-ios-rounded.png')} 
          style={generalStyles.icon}  
          />
        </Pressable>
        <Text style={textStyles.pageTitleText}>Veranstaltung</Text>
        <Image 
          source={require('../assets/icons/ph_share-network.png')} 
          style={generalStyles.icon}  
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={generalStyles.maincontent}>
          <View style={generalStyles.contentcontainer}>
            <Text style={textStyles.largeWhiteRegularText}>Mario Kart Tunier vom FBI</Text>
          </View>
          <View style={generalStyles.contentcontainer}>
            <Image
                source={require('../assets/eventpictures/eventpicture-mario-kart.png')} 
                style={generalStyles.eventImg}
            />
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Text style={textStyles.smallGreyRegularText}>
                   Mario Kart Turnier vom FBI!
                   {'\n'}Ihr könnt euch entweder als komplettes Team anmelden (4 Personen) oder als Teil-Team (1-3 Personen) um dann vor Ort eure anderen Teammitglieder kennenzulernen.
                   {'\n'}{'\n'}Erstellt von: Max Müller
                    </Text>
                </View>
            </View>
          </View>
          <View style={generalStyles.contentcontainerSmall}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/icons/person.png')} 
                style={generalStyles.icon}
              />
              <Text style={generalStyles.informationTextPadding}>
                <Text style={textStyles.smallGreyMediumText}>Hadir Elsekilly und </Text>
                <Text style={textStyles.linkedText} onPress={()=>navigation.navigate('ParticipantsScreen')}>5 weitere</Text>
              </Text>
            </View>
          </View>
          <View style={generalStyles.contentcontainerSmall}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/icons/calendar.png')} 
                style={generalStyles.icon}
              />
              <Text style={generalStyles.informationText}>09.12.2022, 16 Uhr</Text>
            </View>
          </View>
          <View style={generalStyles.contentcontainerSmall}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/icons/location.png')} 
                style={generalStyles.icon}
              />
              <Text style={generalStyles.informationText}>FBI C.0.08</Text>
            </View>
          </View>
          <Pressable onPress={()=>setIsZusageToggleOn(isZusageToggleOn=>!isZusageToggleOn)}>
              <ButtonZusage isZusageToggleOn={isZusageToggleOn} />
          </Pressable>
        </View>
      </ScrollView>

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
  zusageButton: {
    ...generalStyles.btnLarge,
    ...generalStyles.lastElementInScrollView,
    marginTop: 13
  }
});

export default DetailScreenMarioKart;
