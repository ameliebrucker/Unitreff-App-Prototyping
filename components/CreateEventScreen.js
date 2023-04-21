import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TextInput } from 'react-native';
import {generalStyles, textStyles, colors, windowWidth} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from "react-native";


const CreateEventScreen = () => {
  const navigation = useNavigation();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // add keyboard listener to remove fixed navbar when keyboard is open
    Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpen(true)
    );
    Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpen(false)
    );
  }, []);

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
        <Text style={styles.headlineText}>Veranstaltung erstellen</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.maincontent}>
            <TextInput
            style={generalStyles.entryFieldSmall}
            placeholder="Titel"
            placeholderTextColor={colors.lightGrey}
            />
            <TextInput
            style={generalStyles.entryFieldLarge}
            placeholder="Beschreibung"
            placeholderTextColor={colors.lightGrey}
            multiline={true}
            />
            <TextInput
            style={generalStyles.entryFieldSmall}
            placeholder="Datum - Zeit"
            placeholderTextColor={colors.lightGrey}
            />
            <TextInput
            style={generalStyles.entryFieldSmall}
            placeholder="Ort"
            placeholderTextColor={colors.lightGrey}
            />
            <LinearGradient
            colors={colors.gradient}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.uploadButton}>
            <View style={styles.uploadButtonInside}>
                <Image 
                    source={require('../assets/icons/icons8_upload.png')} 
                    style={styles.uploadIcon}  
                /> 
                <Text style={textStyles.secondaryBtnText}>Bild Upload</Text>
            </View>
            </LinearGradient>
            <View style={styles.actionBtnContainer}>
                <LinearGradient
                colors={colors.gradient}
                start={[0, 1]}
                end={[1, 0]}
                style={generalStyles.btnSmall}>
                    <Pressable style={generalStyles.secondaryBtnSmallInside} onPress={()=>{navigation.goBack();}}>
                        <Text style={textStyles.secondaryBtnText}>Abbrechen</Text>
                    </Pressable>
                </LinearGradient>
                <LinearGradient
                colors={colors.gradient}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.submitBtn}>
                <Pressable style={generalStyles.primaryBtnSmallInside} onPress={()=>navigation.navigate('HomeScreen')}>
                    <Text style={textStyles.primaryBtnText}>Erstellen</Text>
                </Pressable>
                </LinearGradient>
            </View>
        </View>
      </ScrollView>

      <View style={{...generalStyles.navBarContainer, opacity: !isKeyboardOpen ? 100 : 0}}>
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
    uploadButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: windowWidth - 40,
        height: 45,
        marginTop: 13
    },
    uploadButtonInside: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        width: windowWidth - 40 - 2,
        height: 43,
        backgroundColor: colors.darkGrey
    },
    uploadIcon: {
        ...generalStyles.icon,
        marginRight: 2
    },
    actionBtnContainer: {
        ...generalStyles.lastElementInScrollView,
        flexDirection: 'row',
        marginTop: 13
    },
    submitBtn: {
        ...generalStyles.btnSmall,
        marginLeft: 45
    }
});

export default CreateEventScreen;