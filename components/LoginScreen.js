import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {colors, generalStyles, textStyles, fontSizes, windowWidth} from '../util/Styles';


const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={generalStyles.background}>
      <View style={generalStyles.statusbar}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.maincontent}>
        <Image 
          source={require('../assets/Logo-unitreff.png')} 
          style={styles.logoPic}  
        />
        <TextInput
          style={generalStyles.entryFieldSmall}
          placeholder="Email"
          placeholderTextColor={colors.lightGrey}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Passwort"
          secureTextEntry={true}
          placeholderTextColor={colors.lightGrey}
        />
        <LinearGradient
          colors={colors.gradientBright}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.buttonLogin}>
            <Pressable style={generalStyles.primaryBtnSmallInside} onPress={()=>navigation.navigate('HomeScreen', {showModal: true})}>
              <Text style={textStyles.primaryBtnText}>Login</Text>
            </Pressable>
        </LinearGradient>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontent: {
    ...generalStyles.maincontent,
    paddingTop: 50
  },
  logoPic: {
    width: 166,
    height: 64,
    marginTop: 50,
    marginBottom: 45
  },
  passwordInput: {
    backgroundColor: colors.darkGrey,
    width: windowWidth - 40,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: fontSizes.small,
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    marginTop: 31
  },
  buttonLogin: {
    ...generalStyles.btnSmall,
    marginTop: 31
  }
});

export default LoginScreen;