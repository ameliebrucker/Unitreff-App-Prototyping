import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalenderScreen';
import CreateEventScreen from './components/CreateEventScreen';
import DetailScreenWorkshop from './components/DetailScreenWorkshop';
import DetailScreenAbroadStudy from './components/DetailScreenAbroadStudy';
import DetailScreenMarioKart from './components/DetailScreenMarioKart';
import ParticipantsScreen from './components/ParticipantsScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="DetailScreenWorkshop" component={DetailScreenWorkshop} />
        <Stack.Screen name="DetailScreenAbroadStudy" component={DetailScreenAbroadStudy} />
        <Stack.Screen name="DetailScreenMarioKart" component={DetailScreenMarioKart} />
        <Stack.Screen name="ParticipantsScreen" component={ParticipantsScreen} />
        <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;