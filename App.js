import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './component/screens/HomeScreen';
import Navbar from './component/Navbar';
import BottomNavbar from './component/BottomNavbar';
import Colors from './global/color';
// import SignUpPage from './component/screens/SignUpPage';
import LoginPage from './component/screens/LoginPage.js';
//navigation
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import MenuListComponenet from './component/MenuListComponenet';
import NotesComponent from './component/screens/NotesComponent';
import UpdateSem from './component/UpdateSemModal';
import UpdateSemModal from './component/UpdateSemModal';
import ForgetPassword from './component/screens/ForgetPassword';
import ChangePassword from './component/screens/ChangePassword';
import AccountSection from './component/AccountSection';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
       
         
     <NavigationContainer>
      
        {/* <Navbar/> */}
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:Colors.darkBackgaround}}}>
          <Stack.Screen name="login" options={{headerShown:false}} component={LoginPage}/>
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
          <Stack.Screen name='Notes' options={{headerShown:false}} component={NotesComponent}/>
          {/* <Stack.Screen name='sem' options={{headerShown:false}} component={UpdateSemModal}/> */}
          {/* <Stack.Screen name='Forget' options={{headerShown:false}} component={ForgetPassword}/> */}
          {/* <Stack.Screen name='Changepassword' options={{headerShown:false}} component={ChangePassword}/> */}
          {/* <Stack.Screen name='Account' options={{headerShown:false}} component={AccountSection}/> */}


        </Stack.Navigator>
        {/* <BottomNavbar/> */}
       </NavigationContainer>
        
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.backgroundColor,
   
    marginTop:20
  }
    
});
