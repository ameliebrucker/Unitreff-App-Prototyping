import React, {useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TextInput } from 'react-native';
import {generalStyles, textStyles, colors, windowWidth} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const CalenderScreen = () => {
  const navigation = useNavigation();
  const ref = useRef(null);

  useEffect(() => {
    // 35 * 14 + 5 = 495
    ref.current.scrollTo({x:495, y:0})
  },[]);

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
        <Text style={styles.headlineText}>Mein Kalender</Text>
      </View>

        <View style={generalStyles.maincontent}>
            <View style={styles.monthsContainer}>
                <Text style={textStyles.smallCalenderText}>November</Text>
                <View style={styles.currentMonth}>
                    <Text style={textStyles.largeCalenderText}>Dezember</Text>
                </View>
                <Text style={textStyles.smallCalenderText}>Januar</Text>
            </View>
            <View style={styles.daysContainer}>
                <LinearGradient
                colors={colors.gradient}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.dayBackground}>
                    <Text style={textStyles.largeCalenderText}>01</Text>
                    <Text style={textStyles.largeCalenderText}>Do</Text>
                </LinearGradient>
                <LinearGradient
                colors={colors.gradientBright}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.dayBackground}>
                    <View style={styles.dayBackgroundSecondary}>
                        <Text style={textStyles.largeCalenderText}>02</Text>
                        <Text style={textStyles.largeCalenderText}>Fr</Text>
                    </View>
                </LinearGradient>
                <LinearGradient
                colors={colors.gradientBright}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.dayBackground}>
                    <View style={styles.dayBackgroundSecondary}>
                        <Text style={textStyles.largeCalenderText}>03</Text>
                        <Text style={textStyles.largeCalenderText}>Sa</Text>
                    </View>
                </LinearGradient>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            ref={ref}
            >
            <View style={styles.calenderEntries}>
                    <View style={generalStyles.lastElementInScrollView}>
                        <Text style={styles.time}>00:00</Text>
                        <Text style={styles.time}>01:00</Text>
                        <Text style={styles.time}>02:00</Text>
                        <Text style={styles.time}>03:00</Text>
                        <Text style={styles.time}>04:00</Text>
                        <Text style={styles.time}>05:00</Text>
                        <Text style={styles.time}>06:00</Text>
                        <Text style={styles.time}>07:00</Text>
                        <Text style={styles.time}>08:00</Text>
                        <Text style={styles.time}>09:00</Text>
                        <Text style={styles.time}>10:00</Text>
                        <Text style={styles.time}>11:00</Text>
                        <Text style={styles.time}>12:00</Text>
                        <Text style={styles.time}>13:00</Text>
                        <Text style={styles.time}>14:00</Text>
                        <Text style={styles.time}>15:00</Text>
                        <Text style={styles.time}>16:00</Text>
                        <Text style={styles.time}>17:00</Text>
                        <Text style={styles.time}>18:00</Text>
                        <Text style={styles.time}>19:00</Text>
                        <Text style={styles.time}>20:00</Text>
                        <Text style={styles.time}>21:00</Text>
                        <Text style={styles.time}>22:00</Text>
                        <Text style={styles.time}>23:00</Text>
                        <Text style={styles.time}>24:00</Text>
                    </View>
                    <View>
                        <LinearGradient
                        colors={colors.gradientBright}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={styles.entry1}>
                            <Pressable onPress={()=>navigation.navigate('DetailScreenWorkshop')}>
                                <Text style={textStyles.smallCalenderText}>Weihnachtsworkshop der Werkstatt{'\n'}14-17 Uhr</Text>
                            </Pressable>
                        </LinearGradient>
                        <LinearGradient
                        colors={colors.gradientBright}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={styles.entry2}>
                            <View>
                                <Text style={textStyles.smallCalenderText}>Winter Dance am 01.12{'\n'}19-21 Uhr</Text>
                            </View>
                        </LinearGradient>
                    </View>
            </View>       
            </ScrollView>
            
        </View>

      <View style={generalStyles.navBarContainer}>
            <View style={generalStyles.navBar}>
                <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image 
                    source={require('../assets/icons/uil_home-alt.png')} 
                    style={generalStyles.iconNavbar}  
                    />
                </Pressable>
                <Image 
                    source={require('../assets/icons/calendar-purple.png')} 
                    style={{...generalStyles.iconNavbar, marginRight: 65}}    
                />        
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
    monthsContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 27
    },
    currentMonth: {
        borderRadius: 20,
        backgroundColor: colors.darkGrey,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    daysContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
        marginTop: 20
    },
    dayBackground: {
        borderRadius: 30,
        width: 66,
        height: 88,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayBackgroundSecondary: {
        borderRadius: 30,
        width: 64,
        height: 86,
        backgroundColor: colors.darkGrey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calenderEntries: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginHorizontal: 27
    },
    time: {
        ...textStyles.largeCalenderText,
        height: 35,
    },
    entry1: {
        borderRadius: 15,
        width: '85%',
        height: 35 * 3,
        padding: 10,
        marginLeft: 'auto',
        marginTop: 35 * 14 + 5
    },
    entry2: {
        borderRadius: 15,
        width: '85%',
        height: 35 * 2,
        padding: 10,
        marginLeft: 'auto',
        marginTop: 35 * 2
    }
});

export default CalenderScreen;