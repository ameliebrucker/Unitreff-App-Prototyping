import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './StackNavigation';

export default function App() {
  const Stack = createNativeStackNavigator();
  // initialize fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  
  if(!fontsLoaded) {
    return(
      <View>
      </View>
    );
  }
  return (
    <StackNavigation></StackNavigation>
  );
}
