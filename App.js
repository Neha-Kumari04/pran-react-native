import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './component/screens/HomeScreen';
import Navbar from './component/Navbar';
import BottomNavbar from './component/BottomNavbar';
import Colors from './global/color';
// import SignUpPage from './component/screens/SignUpPage';
import LoginPage from './component/screens/LoginPage.js';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
       
         
     <NavigationContainer>
      
        <Navbar/>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:Colors.backgroundColor}}}>
          <Stack.Screen name="login" options={{headerShown:false}} component={LoginPage}/>
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>

        </Stack.Navigator>
        <BottomNavbar/>
       </NavigationContainer>
        
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.backgroundColor,
   
    marginTop:20
  }
    
});
