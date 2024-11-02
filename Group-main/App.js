import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator } from "@react-navigation/drawer";



import Splash from './screens/Splash'
import Onboard1 from './screens/Onboard1'
import Onboard2 from './screens/Onboard2'
import Onboard3 from './screens/Onboard3'
import Register2 from './screens/Register2'
import Register3 from './screens/Register3'
import Register5 from './screens/Register5'
import Register6 from './screens/Register6'
import Register7 from './screens/Register7'
import Register8 from './screens/Register8'
import Register9 from './screens/Register9'
import Connects from './screens/Connects'
import Explorer from './screens/Explorer'
import Recompense from './screens/Recompense'
import RendezVous from './screens/RendezVous'
import Profil from './screens/Profil'
import TabBar from './screens/TabBar'
import BottomNavigator from "./screens/TabBar";
import Tabs from "./screens/TabBar1";
import RendezVous2 from './screens/RendezVous2'
import Maps from "./screens/Maps";
import Visualisation from './screens/Visualisation'
import Visualisation1 from "./screens/Visualisation1";
import Visualisation2 from "./screens/Visualisation2";
import Visualisation3 from './screens/Visualisation3'
import Date from './screens/Date'
import Coiffure from './screens/Coiffure'
import VoirSalon from './screens/VoirSalon'
import Choix from './screens/Choix'
import Regis1 from './screens/Regis1'
import Regis2 from './screens/Regis2'
import Logins from "./screens/Logins";
import Forgot1 from "./screens/Forgot1";
import Forgot2 from "./screens/Forgot2";
import Forgot3 from "./screens/Forgot3";
import Forgot4 from "./screens/Forgot4";
import Essais from './screens/Essais'
import Test from './screens/Test'
import TargetScreen from "./screens/TargetScreen";
import Paiement from './screens/Paiement'
import DetailCoiffure from "./screens/DetailCoiffure";

// import Drawers from './screens/Drawers'

const Stack = createStackNavigator();
export default function App(){

  // const Drawer = createDrawerNavigator();
  
  return(
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="Splash">
            <Stack.Screen name="Splash"   component={Splash}/>
            <Stack.Screen name="Onboard1" component={Onboard1}/>
            <Stack.Screen name="Onboard2" component={Onboard2}/>
            <Stack.Screen name="Onboard3" component={Onboard3}/>
            <Stack.Screen name="TabBar" component={BottomNavigator}/>
            <Stack.Screen name="Tabs" component={Tabs}/>
            <Stack.Screen name="Register2" component={Register2}/>
            <Stack.Screen name="Register3" component={Register3}/>
            <Stack.Screen name="Register5" component={Register5}/>
            <Stack.Screen name="Register6" component={Register6}/>
            <Stack.Screen name="Register7" component={Register7}/>
            <Stack.Screen name="Register8" component={Register8}/>
            <Stack.Screen name="Register9" component={Register9}/>
            <Stack.Screen name="Connects" component={Connects}/>
            <Stack.Screen name="Explorer" component={Explorer}/>
            <Stack.Screen name="Recompense" component={Recompense}/>
            <Stack.Screen name="RendezVous" component={RendezVous}/>
            <Stack.Screen name="Profil" component={Profil}/>
            <Stack.Screen name="RendezVous2" component={RendezVous2}/>
            <Stack.Screen name="Maps" component={Maps}/>
            <Stack.Screen name="Visualisation" component={Visualisation}/>
            <Stack.Screen name="Visualisation1" component={Visualisation1}/>
            <Stack.Screen name="Visualisation2" component={Visualisation2}/>
            <Stack.Screen name="Visualisation3" component={Visualisation3}/>
            <Stack.Screen name="Date" component={Date}/>
            <Stack.Screen name="Coiffure" component={Coiffure}/>
            <Stack.Screen name="VoirSalon" component={VoirSalon}/>
            <Stack.Screen name="Choix" component={Choix}/>
            <Stack.Screen name="Regis1" component={Regis1}/>
            <Stack.Screen name="Regis2" component={Regis2}/>
            <Stack.Screen name="Logins" component={Logins}/>
            <Stack.Screen name="Forgot1" component={Forgot1}/>
            <Stack.Screen name="Forgot2" component={Forgot2}/>
            <Stack.Screen name="Forgot3" component={Forgot3}/>
            <Stack.Screen name="Forgot4" component={Forgot4}/>
            <Stack.Screen name="Essais" component={Essais}/>
            <Stack.Screen name="Test" component={Test}/>
            <Stack.Screen name="TargetScreen" component={TargetScreen}/>
            <Stack.Screen name="Paiement" component={Paiement}/>
            <Stack.Screen name="DetailCoiffure" component={DetailCoiffure}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
