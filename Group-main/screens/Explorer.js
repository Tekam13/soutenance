import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, Button, Switch, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Logo from "../SVG/logo";
import Recherche from "../SVG/Search";
import Notice from "../SVG/Notif";
import Menu from "../SVG/Menu";
import Bar1 from "../SVG/TopBar1";
import TabBar from './TabBar'
import Personne from "../SVG/Perso"
import { useState } from 'react';
import RendezVous from './RendezVous';
import Profil from './Profil';

import {
  getLandscapeImages,
  getAnimalImages,
  getNatureImages,
  getCityImages,
} from './Visualisation';


function Explorer({ navigation }) {



  // const [themeColor, setThemeColor] = useState('#fff');
  // function changeThemeColor(){
  //   if(themeColor == '#fff'){
  //     setThemeColor('#010813')
  //     return('#010813');
  //   }else{
  //     setThemeColor('#fff')
  //     return('#fff');    
  //   }
  // <View style={{ backgroundColor: `${themeColor}`, height: 1000}}></View>
  //}
  // <View style={styles.part1}>
  //   <Button onPress={() => changeThemeColor()} title="DarkMode" />
  // </View>
  return (
    <View style={styles.body}>
      <View style={styles.nav2}>
        <Recherche style={styles.search} />
      </View>
      <View style={styles.nav3}>
        <Notice style={styles.notice} />
      </View>
      <View style={styles.nav4}>
        <Menu style={styles.menu} onPress={() => navigation.navigate('Maps')} />
      </View>
      {/* YYYYYYYYYYYYY */}

      <View style={styles.drawer}>
        {/* <Personne/> */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.coiffeur} source={require('./../ressource/coiffeur.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.home}>

        <View style={styles.inp}>
          <TextInput style={styles.input1} placeholder='Recherche' />
        </View>

        <View style={styles.scrol}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Visualisation')}>
              <Text style={styles.txtb}>Homme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Visualisation1')}>
              <Text style={styles.txtb}>Femme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Visualisation')}>
              <Text style={styles.txtb}>Enfant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Visualisation2')}>
              <Text style={styles.txtb}>Onglerie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Visualisation3')}>
              <Text style={styles.txtb}>Coiffeur</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* <View style={styles.text}>
          <Text style={styles.txt1}>Recommended</Text>
          <Text style={styles.txt2} onPress={() => navigation.navigate('VoirSalon')}>See all</Text>
        </View> */}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.container}
        >



          <View style={styles.vertical}>

            <View style={styles.txt}>
              <Text style={styles.txt1}>Luxueux</Text>
              <Text style={styles.txt2} onPress={() => navigation.navigate('VoirSalon')}>See all</Text>
            </View>


            <View style={styles.scroll}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s50.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 6 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s51.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 7 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s39.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 21 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s38.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 19 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s42.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 20 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={styles.txt}>
              <Text style={styles.txt1}>Proche de vous</Text>
              <Text style={styles.txt2} onPress={() => navigation.navigate('VoirSalon')}>See all</Text>
            </View>


            <View style={styles.scroll}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s22.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 24 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s25.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 22 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s8.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 8 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s46.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 17 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s28.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 15 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

              </ScrollView>
            </View>

            <View style={styles.txt}>
              <Text style={styles.txt1}>Bon prix</Text>
              <Text style={styles.txt2} onPress={() => navigation.navigate('VoirSalon')}>See all</Text>
            </View>


            <View style={styles.scroll}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s40.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 13 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s31.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 12 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s21.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 11 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s10.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 10 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s49.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 16 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

              </ScrollView>
            </View>

            <View style={styles.txt}>
              <Text style={styles.txt1}>Prommotion</Text>
              <Text style={styles.txt2} onPress={() => navigation.navigate('Visualisation3')}>See all</Text>
            </View>


            <View style={styles.scroll}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s20.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 23 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s19.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 14 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s7.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 9 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s28.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 15 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

                <View style={styles.image}>
                  <Image style={styles.imag1} source={require('./../ressource/s22.jpg')} />
                  <TouchableOpacity style={styles.ttt} onPress={() => navigation.navigate('TargetScreen', { itemId: 24 })}>
                    <Text style={styles.tt}>detail</Text>
                  </TouchableOpacity>
                  <View style={styles.plus}>
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                    <Image style={styles.pime} source={require('./../ressource/E11.png')} />
                  </View>
                </View>

              </ScrollView>
            </View>
            <View style={styles.scroll1}>
              {/* <ScrollView horizontal={true} style={styles.scrollView}>
              <View style={styles.image}>
              <Text style={styles.footer1}>Blake Anderson</Text>
              <Text style={styles.footer2}>Meilleur style de coiffure </Text>
              </View>
              <View style={styles.image}>
              <Text style={styles.footer1}>Blake Anderson</Text>
              <Text style={styles.footer2}>Meilleur style de coiffure </Text>
              </View>
              <View style={styles.image}>
              <Text style={styles.footer1}>Blake Anderson</Text>
              <Text style={styles.footer2}>Meilleur style de coiffure </Text>
              </View>
              <View style={styles.image}>
              <Text style={styles.footer1}>Blake Anderson</Text>
              <Text style={styles.footer2}>Meilleur style de coiffure </Text>
              </View>
              <View style={styles.image}>
              <Text style={styles.footer1}>Blake Anderson</Text>
              <Text style={styles.footer2}>Meilleur style de coiffure </Text>
              </View>
              </ScrollView> */}
            </View>
          </View>

        </ScrollView>

      </View>


    </View>

  );
}

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

function Recompense({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: 20,
        },
        drawerStyle: {
          backgroundColor: '#010813', // couleur de fond du drawer
          width: 240, // largeur du drawer
        },
      }}
    >
      <Drawer.Screen name="Explorer" component={Explorer} options={{ headerShown: false }} />
      <Drawer.Screen name="Recompense" component={Recompense} options={{ headerShown: false }} />
      <Drawer.Screen name="RendezVous" component={RendezVous} options={{ headerShown: false }} />
      <Drawer.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#010813',
    // width: 500,
    height: '100%',
    // justifyContent: 'space-between'
  },
  cercle: {
    display: 'flex',
    justifyContent: 'space-between',
    left: 25,
    top: 50,
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
    left: 350,
    top: 60,
  },
  notice: {
    display: 'flex',
    justifyContent: 'center',
    left: 400,
    top: 35,
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    left: 175,
    bottom: 10
  },
  coiffeur: {
    display: 'flex',
    bottom: 50,
    left: 5,
    borderRadius: 50
  },


  input1: {
    display: 'flex',
    width: '100%',
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 8,
    //left: 20,
    //position: 'relative'
  },
  btn: {
    display: 'flex',
    width: 185,
    height: 52,
    backgroundColor: '#fff',
    top: 70,
    borderRadius: 16,
    marginLeft: 10
  },
  txtb: {
    textAlign: 'center',
    fontSize: 20,
    top: 10
  },
  scrol: {
    height: 150
  },
  contentContainer: {
    paddingVertical: 20,
    //height: '100%'
  },
  text: {
    display: 'flex',
    flexDirection: 'row'
  },
  txt1: {
    flex: 1,
    color: '#fff',
    fontSize: 30,
    left: 15
  },
  txt2: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    bottom: 30,
    left: 350
  },

  plus: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 10,
    left: 150
  },
  pime: {
    width: 20,
    height: 20
  },
  haut: {
    width: 400,
    height: 400,
  },


  image: {
    display: 'flex',
    width: 250,
    height: 306,
    backgroundColor: '#010813',
    top: 0,
    borderRadius: 25,
    marginLeft: 26
  },
  vertical: {
    height: '100%',
    //backgroundColor: 'red',
    bottom: 10
  },
  imag1: {
    display: 'flex',
    width: 250,
    height: 250,
    borderRadius: 25
  },
  dta: {
    display: 'flex',
    width: 26,
    height: 26,
    bottom: 30,
    left: 210
  },
  scroll1: {
    height: 550,

  },
  tt: {
    color: '#fff',
    left: 15,
    top: 2,
    fontSize: 18
  },
  ttt:{
    width: 80,
    height:30,
    backgroundColor: 'red',
    top: 15,
    borderRadius: 16
  },
})