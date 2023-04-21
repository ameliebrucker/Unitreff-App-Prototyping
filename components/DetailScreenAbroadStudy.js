import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import {generalStyles, textStyles, colors} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const DetailScreenAbroadStudy = () => {
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
            <Text style={textStyles.largeWhiteRegularText}>Summer School USA, Online- Sprechstunde Auslandsamt</Text>
          </View>
          <View style={generalStyles.contentcontainer}>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Text style={textStyles.smallGreyRegularText}>
                   Sie sind Bachelorstudent/in und haben Lust auf ein Sommerstudium in den USA? Fullbright Germany organisiert im Sommer 2023 zwei vollfinanzierte Sommerstudienprogramme für unterschiedliche Zielgruppen in den USA.
                   {'\n'}BBB-Link: https://bbb.th-
                   {'\n'}brandenburg.de/64jtshrijiegi
                   {'\n'}Telefon: 0176228928673
                    {'\n'}{'\n'}Erstellt von: Christina Strom
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
              <Text style={generalStyles.informationText}>0</Text>
            </View>
          </View>
          <View style={generalStyles.contentcontainerSmall}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/icons/calendar.png')} 
                style={generalStyles.icon}
              />
              <Text style={generalStyles.informationText}>03.12.2022, 18 Uhr</Text>
            </View>
          </View>
          <View style={generalStyles.contentcontainerSmall}>
            <View style={generalStyles.informationField}>
              <Image
                source={require('../assets/icons/location.png')} 
                style={generalStyles.icon}
              />
              <Text style={generalStyles.informationText}>Online/Telefonisch</Text>
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

export default DetailScreenAbroadStudy;
