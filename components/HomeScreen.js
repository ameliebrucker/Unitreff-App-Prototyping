import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, Modal } from 'react-native';
import {generalStyles, textStyles, colors, fontSizes, profilePicSizes, windowWidth} from '../util/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [waitingForModal, setWaitingForModal] = useState(false);
  const [isToggleOn_1, setIsToggleOn_1] = useState(false);
  const [isToggleOn_2, setIsToggleOn_2] = useState(false);
  const [isToggleOn_3, setIsToggleOn_3] = useState(true);

  useEffect(() => {
    if (props.route.params?.showModal) {
        setWaitingForModal(true);
        let showModal = props.route.params.showModal;
        setTimeout(()=>{
            setModalVisible(showModal);
            setWaitingForModal(false);
        }, 800);
    }
  }, []);

  function navigateWhenNotWaiting(destination){
    if (!waitingForModal){
        setModalVisible(false);
        navigation.navigate(destination);
    }
  }

  function ToggleZusage(props) {
    const isToggleOn = props.isToggleOn;
    if (isToggleOn) {
        return <LinearGradient
        colors={colors.gradient}
        start={[0, 1]}
        end={[1, 0]}
        style={generalStyles.btnSmall}>
            <View style={styles.primaryToggleInside}>
                <Text style={textStyles.primaryBtnText}>Zugesagt</Text>
                <View style={styles.primaryToggleSwitch}></View>
            </View>
      </LinearGradient>;
    }
    return <LinearGradient
    colors={colors.gradient}
    start={[0, 1]}
    end={[1, 0]}
    style={generalStyles.btnSmall}>
        <View style={styles.secondaryToggleInside}>
            <View style={styles.secondaryToggleSwitch}></View>
            <Text style={textStyles.secondaryBtnText}>Zusagen</Text>
        </View>
  </LinearGradient>;
  }

  return (
    <View style={generalStyles.background}>
      <View style={generalStyles.statusbar}></View>
      <View style={styles.welcomeText}>
        <Pressable onPress={()=>navigateWhenNotWaiting('ProfileScreen')}>
            <Image 
                source={require('../assets/profilepictures/profilepic-user.png')} 
                style={styles.profilePic}  
            />
        </Pressable>
        <View>
            <Text style={textStyles.smallWhiteRegularText}>Hallo,</Text>
            <Text style={textStyles.smallWhiteMediumText}>Amelie</Text>
        </View>
      </View>

      <View style={generalStyles.maincontent}>
        <View style={styles.searchBarContainer}>
            <Image
                source={require('../assets/icons/ri_search-line.png')} 
                style={generalStyles.icon}
            />
            <TextInput
                style={styles.searchBar}
                placeholder="Suchen"
                placeholderTextColor={colors.lightGrey}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={generalStyles.contentcontainer}>
            <Image
                source={require('../assets/eventpictures/eventpicture-workshop.png')} 
                style={generalStyles.eventImg}
            />
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Text style={textStyles.largeWhiteRegularText}>Weihnachtsworkshop der Werkstatt</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/calendar.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>01.12.2022, 14-17 Uhr</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/location.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>Audimax</Text>
                </View>
                <View style={generalStyles.informationField}>
                    <Pressable onPress={()=>navigateWhenNotWaiting('ParticipantsScreen')}>
                        <Image
                        source={require('../assets/profilepictures/participants-preview.png')} 
                        style={styles.participantsPreview}
                        />
                    </Pressable>
                    <Pressable onPress={()=>navigateWhenNotWaiting('ParticipantsScreen')}>
                        <Text style={generalStyles.informationText}>6</Text>
                    </Pressable>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <LinearGradient
                    colors={colors.gradient}
                    start={[0, 1]}
                    end={[1, 0]}
                    style={generalStyles.btnLarge}>
                    <Pressable style={generalStyles.primaryBtnLargeInside} onPress={()=> navigateWhenNotWaiting('DetailScreenWorkshop')}>
                        <Text style={textStyles.primaryBtnText}>Mehr Infos</Text>
                    </Pressable>
                </LinearGradient>
                <Pressable onPress={()=>setIsToggleOn_1(isToggleOn_1=>!isToggleOn_1)}>
                    <ToggleZusage isToggleOn={isToggleOn_1} />
                </Pressable>
            </View>
        </View>

        <View style={generalStyles.contentcontainer}>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Text style={textStyles.largeWhiteRegularText}>Summer School USA, Online- Sprechstunde im Auslandsamt</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/calendar.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>03.12.2022, 18 Uhr</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/location.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>Online/Telefonisch</Text>
                </View>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/person.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>0</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <LinearGradient
                    colors={colors.gradient}
                    start={[0, 1]}
                    end={[1, 0]}
                    style={generalStyles.btnLarge}>
                    <Pressable style={generalStyles.primaryBtnLargeInside} onPress={()=> navigateWhenNotWaiting('DetailScreenAbroadStudy')}>
                        <Text style={textStyles.primaryBtnText}>Mehr Infos</Text>
                    </Pressable>
                </LinearGradient>
                <Pressable onPress={()=>setIsToggleOn_2(isToggleOn_2=>!isToggleOn_2)}>
                    <ToggleZusage isToggleOn={isToggleOn_2} />
                </Pressable>
            </View>
        </View>

        <View style={{...generalStyles.contentcontainer, ...generalStyles.lastElementInScrollView}}>
            <Image
                source={require('../assets/eventpictures/eventpicture-mario-kart.png')} 
                style={generalStyles.eventImg}
            />
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Text style={textStyles.largeWhiteRegularText}>Mario Kart Turnier vom FBI</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/calendar.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>09.12.2022, 16 Uhr</Text>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <View style={generalStyles.informationField}>
                    <Image
                        source={require('../assets/icons/location.png')} 
                        style={generalStyles.icon}
                    />
                    <Text style={generalStyles.informationText}>FBI C.0.08</Text>
                </View>
                <View style={generalStyles.informationField}>
                <Pressable onPress={()=>navigateWhenNotWaiting('ParticipantsScreen')}>
                        <Image
                        source={require('../assets/profilepictures/participants-preview.png')} 
                        style={styles.participantsPreview}
                        />
                    </Pressable>
                    <Pressable onPress={()=>navigateWhenNotWaiting('ParticipantsScreen')}>
                        <Text style={generalStyles.informationText}>6</Text>
                    </Pressable>
                </View>
            </View>
            <View style={generalStyles.informationFieldWrapper}>
                <LinearGradient
                    colors={colors.gradient}
                    start={[0, 1]}
                    end={[1, 0]}
                    style={generalStyles.btnLarge}>
                    <Pressable style={generalStyles.primaryBtnLargeInside} onPress={()=> navigateWhenNotWaiting('DetailScreenMarioKart')}>
                        <Text style={textStyles.primaryBtnText}>Mehr Infos</Text>
                    </Pressable>
                </LinearGradient>
                <Pressable onPress={()=>setIsToggleOn_3(isToggleOn_3=>!isToggleOn_3)}>
                    <ToggleZusage isToggleOn={isToggleOn_3} />
                </Pressable>
            </View>
        </View>
        </ScrollView>

        <View style={generalStyles.navBarContainer}>
            <View style={generalStyles.navBar}>
                <Image 
                    source={require('../assets/icons/uil_home-alt-purple.png')} 
                    style={generalStyles.iconNavbar}  
                />
                <Pressable onPress={()=>navigateWhenNotWaiting('CalendarScreen')}>
                    <Image 
                    source={require('../assets/icons/calendar.png')} 
                    style={{...generalStyles.iconNavbar, marginRight: 65}}    
                    />
                </Pressable>          
                    <Image 
                    source={require('../assets/icons/ion_notifications-outline.png')} 
                    style={generalStyles.iconNavbar}  
                />
                <Pressable onPress={()=>navigateWhenNotWaiting('ProfileScreen')}>
                    <Image 
                        source={require('../assets/icons/iconoir_profile-circled.png')} 
                        style={generalStyles.iconNavbar}     
                    />
                </Pressable>
            </View>
            <Pressable style={generalStyles.plusButtonNavBar} onPress={()=>navigateWhenNotWaiting('CreateEventScreen')}>
                <Image 
                source={require('../assets/icons/ic_baseline-plus.png')}     
                />
            </Pressable>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modal}>
            <LinearGradient
            colors={colors.gradientBright}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.modalFrame}>
                <View style={styles.modalContent}>
                    <Pressable style={styles.modalCloseBtn} onPress={() => setModalVisible(modalVisible=>!modalVisible)}>
                        <Image 
                        source={require('../assets/icons/material-symbols_close.png')} 
                        style={generalStyles.icon}     
                        />
                    </Pressable>
                    <Text style={textStyles.largeCalenderText}>Amelie, hast du am 09.12.22, 16 Uhr schon etwas vor?</Text>
                    <Text style={textStyles.smallGreyRegularText}>{'\n'}Max Müller hat vor Kurzem die neue Veranstaltung "Mario Kart Turnier vom FBI" erstellt!</Text>
                    <View style={styles.modalBtn}>
                        <LinearGradient
                        colors={colors.gradient}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={generalStyles.btnLarge}>
                            <Pressable style={generalStyles.primaryBtnLargeInside} onPress={()=> {navigateWhenNotWaiting('DetailScreenMarioKart')}}>
                                <Text style={textStyles.primaryBtnText}>Zum Event</Text>
                            </Pressable>
                        </LinearGradient>
                    </View>
                </View>
            </LinearGradient>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    welcomeText: {
        ...generalStyles.informationField,
        paddingLeft: 20
    },
    profilePic: {
        width: profilePicSizes.medium,
        height: profilePicSizes.medium,
        marginRight: 15,
        borderRadius: 100
    },
    searchBarContainer: {
        ...generalStyles.contentcontainerSmall,
        flexDirection:'row',
        marginBottom: 5
    },
    searchBar: {
        fontSize: fontSizes.small,
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        paddingLeft: 10,
        width: '100%'
    },
    participantsPreview: {
        width: profilePicSizes.multiPicsSmallWidth,
        height: profilePicSizes.small
    },
    primaryToggleInside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5
    },
    secondaryToggleInside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        width: 110,
        height: 39,
        paddingHorizontal: 5,
        backgroundColor: colors.darkGrey
    },
    primaryToggleSwitch: {
        borderRadius: 7,
        width: 23,
        height: 34,
        backgroundColor: colors.white,
        marginHorizontal: -2
    },
    secondaryToggleSwitch: {
        borderRadius: 7,
        width: 23,
        height: 34,
        backgroundColor: colors.lightGrey,
        marginHorizontal: -2
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.transparentBlack
    },
    modalFrame: {
        backgroundColor: colors.darkGrey,
        borderRadius: 15,
        width: windowWidth - 40,
        padding: 1
    },
    modalContent: {
        backgroundColor: colors.darkGrey,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    modalBtn: {
        alignItems: 'center',
        marginVertical: 13
    },
    modalCloseBtn: {
        marginLeft: 'auto',
        paddingBottom: 4
    }
});

export default HomeScreen;
