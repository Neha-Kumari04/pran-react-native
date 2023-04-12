import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './component/screens/HomeScreen';
import Navbar from './component/Navbar';
import BottomNavbar from './component/BottomNavbar';
import Colors from './global/color';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
     <HomeScreen/>
     <BottomNavbar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.backgroundColor,
    height:"100%",
    marginTop:30
  }
    
});
